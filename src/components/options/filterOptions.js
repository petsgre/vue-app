import { genderOptions } from "./options"

const getControl = ({ ...config }) => {
  return config
}

export default {
  widgets: [
    {
      control: getControl({
        name: "XiaoInput",
        options: {
          props: {
            placeholder: "课程名称",
          },
          on: {
            update: function(value) {
              console.log(this, value)
              this.filterData.name = value
            },
          },
        },
      }),
      valuePath: "name",
    },
    {
      control: getControl({
        name: "XiaoSelect",
        options: {
          props: {
            placeholder: "性别",
            options: genderOptions,
          },
          on: {
            update: function(value) {
              console.log(this, value)
              this.filterData.gender = value
            },
          },
        },
      }),
      valuePath: "gender",
    },
  ],
}
