import { toJpeg, toPng, toSvg } from "html-to-image";
import { getRectOfNodes, getTransformForBounds } from "reactflow";

export const getHighResImage = async (nodes, flowInstance, options = {}) => {
  const { 
    type = "png", 
    pixelRatio = 2, 
    background = "#0d0815",
    quality = 0.9
  } = options;

  // 1. حساب الحدود الدقيقة للنودز
  const nodesBounds = getRectOfNodes(nodes);
  
  // 2. حساب التحويل المطلوب لجعل كل النودز مرئية في لقطة واحدة
  // نستخدم أبعاد النودز نفسها كأبعاد للهدف لضمان عدم وجود هوامش زائدة
  const transform = getTransformForBounds(
    nodesBounds,
    nodesBounds.width,
    nodesBounds.height,
    0.1, 
    10,   
    0  
  );

  // 3. البحث عن حاوية React Flow الرئيسية بدلاً من الـ viewport فقط
  // التقاط الحاوية الرئيسية يضمن ثبات العناصر والأنماط (CSS)
  const element = document.querySelector(".react-flow__container") || document.querySelector(".react-flow");
  if (!element) throw new Error("React Flow container not found");

  // 4. إخفاء العناصر غير المرغوب فيها مؤقتاً (مثل أدوات التحكم)
  const controls = element.querySelector(".react-flow__controls");
  const attribution = element.querySelector(".react-flow__attribution");
  if (controls) controls.style.display = "none";
  if (attribution) attribution.style.display = "none";

  try {
    const config = {
      backgroundColor: background,
      width: nodesBounds.width,
      height: nodesBounds.height,
      style: {
        width: `${nodesBounds.width}px`,
        height: `${nodesBounds.height}px`,
        // هنا نقوم بضبط الـ viewport داخل الصورة ليكون مطابقاً تماماً لحدود الجداول
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
      pixelRatio: pixelRatio,
      quality: quality,
    };

    let result;
    if (type === "svg") {
      result = await toSvg(element, config);
    } else if (type === "jpeg" || type === "jpg") {
      result = await toJpeg(element, config);
    } else {
      result = await toPng(element, config);
    }

    return result;
  } finally {
    // إرجاع العناصر المخفية لوضعها الطبيعي
    if (controls) controls.style.display = "";
    if (attribution) attribution.style.display = "";
  }
};

export const downloadFile = (dataUrl, filename) => {
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  link.click();
};
