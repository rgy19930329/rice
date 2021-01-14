import React from 'react';
import { Button, DatePicker } from 'antd';

export default () => {
  return (
    <div>
      <div>Button</div>
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
      <div>DatePicker</div>
      <div>
        <DatePicker
          onChange={(date, dateString) => {
            console.log(date, dateString);
          }}
        />
      </div>
    </div>
  )
}