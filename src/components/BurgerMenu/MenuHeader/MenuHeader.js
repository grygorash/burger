import React from 'react';

import './MenuHeader.css';

const MenuHeader = () =>
  <div className="menu-header">
    <div>
      <h3> Закажи <span>2</span> бургера </h3>
      <p>и</p>
      <h3>получи скидку на третий <span>50%</span></h3>
    </div>
  </div>;

export default MenuHeader;