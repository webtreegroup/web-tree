import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Rating.scss';

interface IRatingProps {
  quantity: number;
}

function Rating({ quantity }: IRatingProps) {
  const stars = new Array(quantity).fill(null).map(() => <FontAwesomeIcon icon="star" />);

  return (
    <div className="rating">
      {stars}
    </div>
  );
}

export default Rating;
