import { DatePicker, Select } from 'antd'
import React from 'react';

let Picktime = ()=>{
  const { Option, OptGroup } = Select;
  const { MonthPicker } = DatePicker;

  return(
  <div>
      <Select
        defaultValue="全部车型"
        style={{ width: 200 }}
      >
        <OptGroup label="单独选择">
          <Option value="福特">福特</Option>
          <Option value="本田">本田</Option>
          <Option value="奔驰">奔驰</Option>
          <Option value="宝马">宝马</Option>
          <Option value="马自达">马自达</Option>
        </OptGroup>
        <OptGroup label="全部选择">
          <Option value="全部车型">全部车型</Option>
        </OptGroup>
      </Select>  
      <MonthPicker placeholder="Select month" />
  </div>
  )
}

export default Picktime;