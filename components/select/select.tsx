import { useState } from 'react';
import { Icons } from 'components';
const Select = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="select">
      <div className="select__header" onClick={() => setShow(!show)}>
        Login <Icons.ArrowIcon />
      </div>

      <div
        className={`select__dropdown ${show ? 'select__dropdown--show' : ''}`}
      >
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
      </div>
    </div>
  );
};

export default Select;
