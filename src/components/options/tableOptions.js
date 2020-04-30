import _ from "lodash"
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

export default function() {
  return {
    table: [
      {
        key: "index",
        label: "#",
        render(h, context) {
          return <span>{context.index}</span>
        },
      },
      {
        key: "curriculum_name",
        label: "课程名称",
        render(h, context) {
          return <span>{context.data.curriculum_name}</span>
        },
      },
      {
        key: "sale_status",
        label: "销售状态",
        options: COURSE_STATUS,
        render(h, context) {
          return <span>{context.options[context.data.sale_status]}</span>
        },
      },
      {
        key: "operation",
        label: "操作",
        render(h, context) {
          const { list } = context.customize
          if (_.find(list, { id: context.data.id })) {
            return (
              <div>
                <el-button
                  size="mini"
                  onClick={() => {
                    context.customize.remove(context.data)
                  }}
                >
                  取消
                </el-button>
              </div>
            )
          }
          return (
            <div>
              <el-button
                size="mini"
                type="primary"
                onClick={() => {
                  context.customize.add(context.data)
                }}
              >
                选择课程
              </el-button>
            </div>
          )
        },
      },
    ],
  }
}
