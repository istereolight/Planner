import { useDraggable } from '@dnd-kit/core'


export const ItemCard = ({ card }) => {
  const { listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });

  const style = transform
  ? {
      transform: `translate(${transform.x}px, ${transform.y}px)`,
    }
  : undefined;

  return (
      <div 
        ref={setNodeRef}
        {...listeners}
        className='w-24 p-1 tab' 
        style={style}
      >
        <img src={card.src} alt={card.alt} />
      </div>

  )
}
