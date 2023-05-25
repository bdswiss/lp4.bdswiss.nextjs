import errors from "../../styles/errors.module.scss";

export default function LayoutError() {
  return (
    <div className={errors.error}>
      <h1>403 Forbidden</h1>
      <div>This page is not available in your country.</div>
    </div>
  );
}