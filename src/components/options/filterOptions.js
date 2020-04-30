import { genderOptions } from "./options"
export const COURSE_STATUS = {
  4: "已开课",
  5: "未开课",
  9: "已结课",
  11: "已停开",
}
export const SALE_STATUS = {
  2: "未开售",
  3: "已开售",
  7: "已停售",
}
const getControl = ({ ...config }) => {
  return config
}

export default function({ gradesOption }) {
  return {
    widgets: [
      {
        control: getControl({
          name: "XiaoInput",
          props: {
            placeholder: "课程名称",
            disabled: true,
          },
          on: {
            update: function(value) {
              this.$emit("update:filterData", {
                ...this.filterData,
                curriculum_title: value,
              })
            },
          },
        }),
        valuePath: "curriculum_title",
      },
      {
        control: getControl({
          name: "XiaoInput",
          props: {
            placeholder: "老师姓名",
          },
          on: {
            update: function(value) {
              this.$emit("update:filterData", {
                ...this.filterData,
                lecturer_name: value,
              })
            },
          },
        }),
        valuePath: "lecturer_name",
      },
      {
        control: getControl({
          name: "XiaoSelect",
          props: {
            multiple: true,
            placeholder: "年级",
            options: {
              props: {
                labelKey: "zh_cn",
                valueKey: "code",
              },
              on: {},
              options: gradesOption,
            },
          },
          on: {
            change: function(value) {
              this.$emit("update:filterData", {
                ...this.filterData,
                grade_list: value,
              })
            },
          },
        }),
        valuePath: "grade_list",
      },
      {
        control: getControl({
          name: "XiaoSelect",
          options: {
            props: {
              placeholder: "学科",
              options: genderOptions,
            },
            on: {
              update: function(value) {
                this.$emit("update:filterData", {
                  ...this.filterData,
                  gender: value,
                })
              },
            },
          },
        }),
        valuePath: "gender",
      },
      {
        control: getControl({
          name: "XiaoSelect",
          options: {
            props: {
              placeholder: "课程类型",
              options: genderOptions,
            },
            on: {
              update: function(value) {
                this.$emit("update:filterData", {
                  ...this.filterData,
                  gender: value,
                })
              },
            },
          },
        }),
        valuePath: "gender",
      },
      {
        control: getControl({
          name: "XiaoSelect",
          options: {
            props: {
              placeholder: "开课状态",
              options: COURSE_STATUS,
            },
            on: {
              update: function(value) {
                this.$emit("update:filterData", {
                  ...this.filterData,
                  gender: value,
                })
              },
            },
          },
        }),
        valuePath: "gender",
      },
      {
        control: getControl({
          name: "XiaoSelect",
          props: {
            placeholder: "销售状态",
            options: {
              options: SALE_STATUS,
            },
          },
          on: {
            change: function(value) {
              this.$emit("update:filterData", {
                ...this.filterData,
                sale_status: value,
              })
            },
          },
        }),
        valuePath: "sale_status",
      },
    ],
  }
}
