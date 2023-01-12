type statusProps = {
  status: "loading" | "success" | "error";
};
export const Status = (props: statusProps) => {
  let message: string;
  if (props.status === "loading") {
    message = "Loading ...";
  } else if (props.status === "success") {
    message = "Data fectched successfully";
  } else {
    message = "Error fetching Data";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
