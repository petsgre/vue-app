import { genderOptions } from "./options"

export default {
  table: [
    {
      key: "name",
      label: "课程名称",
    },
    {
      key: "gender",
      label: "性别",
      options: genderOptions,
      render(value, options) {
        const res = options.find((item) => {
          return item.value == value
        })
        return res
      },
    },
    {
      key: "address",
      label: "地址",
      render: (h, context) => {
        return (
          <div
            onClick={() => {
              console.log(context)
            }}
          >
            <span>名称</span>
            <span> :{context.data}</span>
          </div>
        )
      },
    },
  ],
}
