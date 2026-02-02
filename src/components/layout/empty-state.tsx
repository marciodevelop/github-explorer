interface IEmptyState {
  message: string;
  description: string;
}

export function EmptyState(props: IEmptyState) {
  const { message, description } = props;
  return (
    <main className="flex flex-col items-center justify-center">
      <p>{message}</p>
      <p>{description}</p>
    </main>
  );
}
