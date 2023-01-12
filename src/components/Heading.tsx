type HeadingProps = {
  childern: string;
};
export const Heading = (props: HeadingProps) => {
  return (
    <div>
      <h2>{props.childern}</h2>
    </div>
  );
};
