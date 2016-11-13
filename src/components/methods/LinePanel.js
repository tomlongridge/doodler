import React, {PropTypes} from 'react';
import LineCanvas from './LineCanvas';

const LinePanel = () => {

  return (
    <div className="col-md-6 linePanel">
      <LineCanvas
        stage={6}
        rows={10}
        startPlaceBell={2}
        endPlaceBell={3}
        padding={20}
        height={600}
        width={600} />
    </div>
  );
};

export default LinePanel;
