import { TextP } from "../custom";

export const AppSelect = (props: {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data: {
    title: string;
    value: string;
  }[];
}) => {
  return (
    <>
      <div className={'w-full flex flex-col items-start'}>
        <label htmlFor="category" className="mb-1">
          <TextP>{props.label}</TextP>
        </label>
      </div>
      <select
        name="category"
        className={`
                w-full bg-card border-primary outline-primary
                p-2 border-2 rounded-md
              `}
        onChange={props.onChange}
      >
        {props.data.map((val, i) => (
          <option key={i} value={val.value}>
            {val.title}
          </option>
        ))}
      </select>
    </>
  );
};
