import { cn } from '@/lib';
import { IconType } from 'react-icons';

export function InputText(props: { Icon?: IconType; placeH: string; className?: string }) {
  const { Icon } = props;
  return (
    <div className={cn('bg-card  rounded-lg w-full flex items-center justify-center px-2', props.className)}>
      <input
        className="py-2 px-2 bg-card text-card-foreground rounded-2xl w-full outline-none"
        type="text"
        placeholder={props.placeH}
      />
      {props.Icon && (
        <div
          className={`
        size-[30px] rounded-[15px] 
        flex items-center 
        justify-center bg-secondary
      `}
        >
          {Icon && <Icon size={14} />}
        </div>
      )}
    </div>
  );
}
