import { AnimatePresence } from "framer-motion";
import CollectionCard from "./CollectionCard";

export default function CollectionsList({ items, expanded, onToggle }) {
  return (
    <section className="grid grid-cols-1 gap-4">
      <AnimatePresence>
        {items.map((item, index) => (
          <CollectionCard
            key={item.collection}
            item={item}
            index={index}
            expanded={expanded}
            onToggle={onToggle}
          />
        ))}
      </AnimatePresence>
    </section>
  );
}
