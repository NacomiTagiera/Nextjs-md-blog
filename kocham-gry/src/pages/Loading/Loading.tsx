import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <h1 className="text-center text-white pt-3">
      <Spinner as="span" animation="grow" variant="danger" />
      Loading...
    </h1>
  );
}
