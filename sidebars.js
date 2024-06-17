/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  mySidebar: [
    {
      type: 'doc',
      label: '首页',
      id: 'README'
    },
    {
      type: 'category',
      label: '快速开始',
      link: {
        type: 'doc',
        id: 'start/README',
      },
      items: [
        {
          type: "doc",
          label: "使用State API",
          id: "start/state/start",
        },
        {
          type: "category",
          label: "使用Configuration API",
          items:[
            {
              type: "doc",
              label: "使用Apollo配置中心",
              id: "start/configuration/start-apollo",
            },
            {
              type: "doc",
              label: "使用Etcd配置中心",
              id: "start/configuration/start",
            },
            {
              type: "doc",
              label: "使用Nacos配置中心",
              id: "start/configuration/start-nacos",
            },
          ]
        },
        {
          type: "doc",
          label: "发布、订阅消息",
          id: "start/pubsub/start",
        },
        {
          type: "doc",
          label: "(建设中) 使用 DelayQueue API",
          id: "start/delay_queue/start",
        },
        {
          type: "doc",
          label: "使用分布式锁 API",
          id: "start/lock/start",
        },
        {
          type: "doc",
          label: "使用Sequencer API生成分布式自增id",
          id: "start/sequencer/start",
        },
        {
          type: "doc",
          label: "使用 Secret API",
          id: "start/secret/start",
        },
        {
          type: "doc",
          label: "进行RPC调用",
          id: "start/rpc/helloworld",
        },
        {
          type: "doc",
          label: "使用File API",
          id: "start/file/minio",
        },
        {
          type: "doc",
          label: "使用 OSS API",
          id: "start/oss/oss",
        },
        {
          type: "doc",
          label: "使用UDS通信",
          id: "start/uds/start",
        },
        {
          type: "doc",
          label: "(建设中)使用 sms API",
          id: "start/sms/start",
        },
        {
          type: "doc",
          label: "(建设中)使用 cryption API",
          id: "start/cryption/start",
        },
        {
          type: "doc",
          label: "(建设中)使用 phone API",
          id: "start/phone/start",
        },
        {
          type: "doc",
          label: "(建设中)使用 email API",
          id: "start/email/start",
        },
        { type: "doc", label: "使用 lifecycle API", id: "start/lifecycle/start", },
        {
          type: 'category',
          label: 'API插件',
          items: [
            {
              type: 'doc',
              label: '注册您自己的API',
              id: 'start/api_plugin/helloworld',
            },
            {
              type: 'doc',
              label: '自动生成 API 插件',
              id: 'start/api_plugin/generate',
            }
            ]},
            {
              type: 'category',
              label: '作为 Istio 的数据面',
              items: [
                {
                  type: 'doc',
                  label: '集成 Istio 1.10.6 演示',
                  id: 'start/istio/README',
                },
                {
                  type: 'doc',
                  label: '集成 Istio 1.5.x 演示',
                  id: 'start/istio/start',
                },
              ],
            },
            {
              type: 'category',
              label: '在四层网络进行流量干预',
              items: [
                {
                  type: 'doc',
                  label: 'Dump TCP 流量',
                  id: 'start/network_filter/tcpcopy',
                },
              ],
            },
            {
              type: 'category',
              label: '在七层网络进行流量干预',
              items: [
                {
                  type: 'doc',
                  label: '方法级别限流',
                  id: 'start/stream_filter/flow_control',
                },
              ],
            },
            {
              type: 'doc',
              label: '健康检查、查询运行时元数据',
              id: 'start/actuator/start',
            },
            {
              type: 'category',
              label: '可观测性',
              items: [
                {
                  type: 'doc',
                  label: 'Trace, Metrics',
                  id: 'start/trace/trace',
                },
                {
                  type: 'doc',
                  label: 'Trace 接入 Skywalking',
                  id: 'start/trace/skywalking',
                },
                {
                  type: 'doc',
                  label: 'Trace 接入 Zipkin',
                  id: 'start/trace/zipkin',
                },
                {
                  type: 'doc',
                  label: 'Trace 接入 Jaeger',
                  id: 'start/trace/jaeger',
                },
                {
                  type: 'doc',
                  label: 'Metrics 接入 Prometheus',
                  id: 'start/trace/prometheus',
                },
              ],
            },
            {
              type: 'doc',
              label: '将业务逻辑通过 WASM 下沉进sidecar',
              id: 'start/wasm/start',
            },
            {
              type: 'doc',
              label: '基于 WASM 跟 Runtime 实现的 Faas 模型',
              id: 'start/faas/start',
            }]
    },
      //
    {
      type: 'doc',
      label: '线上实验室',
      id: 'start/lab'
    },
        {
          type: 'category',
          label: '用户手册',
          items: [
            {
              type: 'category',
              label: '功能介绍',
              items: [
                {
                  type: 'doc',
                  label: 'File API',
                  id: 'building_blocks/file/file',
                },
                {
                  type: 'doc',
                  label: 'Actuator API',
                  id: 'building_blocks/actuator/actuator',
                },
                {
                  type: 'doc',
                  label: 'State API',
                  id: 'building_blocks/state/reference',
                },
                {
                  type: 'doc',
                  label: 'Sequencer API',
                  id: 'building_blocks/sequencer/reference',
                },
                {
                  type: 'doc',
                  label: 'Distributed Lock API',
                  id: 'building_blocks/lock/reference',
                },
                {
                  type: 'doc',
                  label: 'Pub/Sub API',
                  id: 'building_blocks/pubsub/reference',
                },
                {
                  type: 'doc',
                  label: 'RPC API',
                  id: 'building_blocks/rpc/reference',
                },
                {
                  type: 'doc',
                  label: 'Configuration API',
                  id: 'building_blocks/configuration/reference',
                },
                {
                  type: 'category',
                  label: '可扩展性',
                  items: [
                    {
                      type: 'doc',
                      label: 'API插件',
                      id: 'design/api_plugin/design',
                    },
                    {
                      type: 'doc',
                      label: 'pluggable component 组件',
                      id: 'design/pluggable/usage',
                    },
                  ],
                },
              ],
            },
            {
              type: 'doc',
              label: 'gRPC API 接口文档',
              id: 'api_reference/README',
            },
            {
              type: 'link',
              label: 'java sdk',
              href: 'https://github.com/layotto/java-sdk',
            },
            {
              type: 'link',
              label: '.net sdk',
              href: 'https://github.com/layotto/dotnet-sdk',
            },
            {
              type: 'link',
              label: 'js sdk',
              href: 'https://github.com/layotto/js-sdk',
            },
            {
              type: 'doc',
              label: 'go sdk',
              id: 'sdk_reference/go/start',
            },
          ],
        },

    //

{
  type: 'category',
  label: '运维手册',
  items: [
    {
      type: 'category',
      label: '如何配置 Layotto',
      items: [
        {
          type: 'doc',
          label: 'Layotto 配置文件介绍',
          id: 'configuration/overview',
        },
        {
          type: 'category',
          label: '组件配置说明',
          link:{
            type:"doc",
            id:"component_specs/overview"
          },
          items: [
            {
              type: 'category',
              label: 'State',
              link:{
                type:"doc",
                id:"component_specs/state/common"
              },
              items: [
                {
                  type: 'doc',
                  label: 'Redis',
                  id: 'component_specs/state/redis',
                },
                {
                  type: 'doc',
                  label: '其他组件',
                  id: 'component_specs/state/others',
                },
              ],
            },
            {
              type: 'category',
              label: 'Pub/Sub',
              link:{
                type:"doc",
                id:"component_specs/pubsub/common"
              },
              items: [
                {
                  type: 'doc',
                  label: 'Redis',
                  id: 'component_specs/pubsub/redis',
                },
                {
                  type: 'doc',
                  label: '其他组件',
                  id: 'component_specs/pubsub/others',
                },
              ],
            },
            {
              type: 'category',
              label: 'Distributed Lock',
              link:{
                type:"doc",
                id:"component_specs/lock/common"
              },
              items: [
                {
                  type: 'doc',
                  label: 'Redis',
                  id: 'component_specs/lock/redis',
                },
                {
                  type: 'doc',
                  label: 'Etcd',
                  id: 'component_specs/lock/etcd',
                },
                {
                  type: 'doc',
                  label: 'Zookeeper',
                  id: 'component_specs/lock/zookeeper',
                },
                {
                  type: 'doc',
                  label: 'Consul',
                  id: 'component_specs/lock/consul',
                },
                {
                  type: 'doc',
                  label: 'MongoDB',
                  id: 'component_specs/lock/mongo',
                },
              ],
            },
            {
              type: 'doc',
              label: 'Configuration',
              id: 'component_specs/configuration/etcd',
            },
            {
              type: 'doc',
              label: 'File',
              id: 'component_specs/file/oss',
            },
            {
              type: 'category',
              label: 'Sequencer',
              items: [
                {
                  type: 'doc',
                  label: 'Etcd',
                  id: 'component_specs/sequencer/etcd',
                },
                {
                  type: 'doc',
                  label: 'Redis',
                  id: 'component_specs/sequencer/redis',
                },
                {
                  type: 'doc',
                  label: 'Zookeeper',
                  id: 'component_specs/sequencer/zookeeper',
                },
                {
                  type: 'doc',
                  label: 'MongoDB',
                  id: 'component_specs/sequencer/mongo',
                },
                {
                  type: 'doc',
                  label: 'Mysql',
                  id: 'component_specs/sequencer/mysql',
                },
                {
                  type: 'doc',
                  label: 'Snowflake',
                  id: 'component_specs/sequencer/snowflake',
                },
              ],
            },
            {
              type: 'doc',
              label: 'Secret Store',
              id: 'component_specs/secret/common',
            },
            {
              type: 'doc',
              label: '自定义组件',
              id: 'component_specs/custom/common',
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      label: '如何部署、升级 Layotto',
      id: 'operation/README',
    },
    {
      type: 'doc',
      label: 'Layotto sidecar injector',
      id: 'operation/sidecar_injector',
    },
    {
      type: 'doc',
      label: '如何本地开发、本地调试',
      id: 'operation/local',
    },
  ]
},


      //
    {
      type: 'category',
      label: '设计文档',
      items: [
        {
          type: 'doc',
          label: '动态配置下发、组件热重载',
          id: 'design/lifecycle/apply_configuration',
        },
        {
          type: 'doc',
          label: 'Actuator设计文档',
          id: 'design/actuator/actuator-design-doc',
        },
        {
          type: 'doc',
          label: 'gRPC框架设计文档',
          id: 'design/actuator/grpc-design-doc',
        },
        {
          type: 'doc',
          label: 'Configuration API with Apollo',
          id: 'design/configuration/configuration-api-with-apollo',
        },
        {
          type: 'doc',
          label: 'Pub/Sub API以及与dapr component的兼容性',
          id: 'design/pubsub/pubsub-api-and-compability-with-dapr-component',
        },
        {
          type: 'doc',
          label: 'RPC设计文档',
          id: 'design/rpc/rpc_design_document',
        },
        {
          type: 'doc',
          label: '分布式锁API设计文档',
          id: 'design/lock/lock-api-design',
        },
        {
          type: 'doc',
          label: 'Sequencer API设计文档',
          id: 'design/sequencer/design',
        },
        {
          type: 'doc',
          label: 'File API设计文档',
          id: 'design/file/file-design',
        },
        {
          type: 'doc',
          label: 'FaaS 设计文档',
          id: 'design/faas/faas-poc-design',
        },
        {
          type: 'doc',
          label: 'API插件',
          id: 'design/api_plugin/design',
        },
        {
          type: 'doc',
          label: '支持Dapr API',
          id: 'design/api_plugin/dapr_api',
        },
        {
          type: 'doc',
          label: 'OSS API设计文档',
          id: 'design/oss/design',
        },
        {
          type: 'doc',
          label: 'pluggable component 设计文档',
          id: 'design/pluggable/design',
        },
      ],
    },

{
  "type": "category",
  "label": "贡献指南",
  "items": [
    {
      "type": "doc",
      "label": "Layotto 贡献指南",
      "id": "development/CONTRIBUTING"
    },
    {
      "type": "doc",
      "label": "新手攻略：从零开始成为 Layotto 贡献者",
      "id": "development/start-from-zero"
    },
    {
      "type": "category",
      "label": "想要贡献文档?",
      "items": [
        {
          "type": "doc",
          "label": "文档贡献指南",
          "id": "development/contributing-doc"
        },
        {
          "type": "doc",
          "label": "使用工具自动测试 Quickstart 文档",
          "id": "development/test-quickstart"
        }
      ]
    },
    {
      "type": "doc",
      "label": "想要开发新的组件?",
      "id": "development/developing-component"
    },
    {
      "type": "doc",
      "label": "组件引用开发指南",
      "id": "development/component_ref/component_ref"
    },
    {
      "type": "category",
      "label": "想要修改proto文件或API定义？",
      "items": [
        {
          "type": "doc",
          "label": "如何基于proto文件生成代码、接口文档",
          "id": "api_reference/how_to_generate_api_doc"
        },
        {
          "type": "doc",
          "label": "proto文件注释规范",
          "id": "api_reference/comment_spec_of_proto"
        },
        {
          "type": "doc",
          "label": "新增API时的开发规范",
          "id": "development/developing-api"
        }
      ]
    },
    {
      "type": "doc",
      "label": "Layotto 四大 Github Workflows 说明",
      "id": "development/github-workflows"
    },
    {
      "type": "doc",
      "label": "Layotto 命令行工具指南",
      "id": "development/commands"
    },
    {
      "type": "category",
      "label": "如何给 issue 打 label",
      "items": [
        {
          "type": "doc",
          "label": "新手任务 (good first issue) 的 label 规范",
          "id": "development/label-spec"
        }
      ]
    },
    {
      "type": "doc",
      "label": "发布手册",
      "id": "development/release-guide"
    },
    {
      "type": "doc",
      "label": "待解决的问题",
      "id": "development/problems-to-solve"
    }
  ]
},
    {
      "type": "category",
      "label": "社区",
      "items": [
        {
          "type": "doc",
          "label": "社区会议",
          "id": "community/meeting"
        },
        {
          "type": "doc",
          "label": "SOFAStack & MOSN 社区角色说明",
          "id": "community/governance"
        },
        {
          "type": "doc",
          "label": "Layotto社区晋升规则",
          "id": "community/promote"
        },
        {
          "type": "doc",
          "label": "Layotto社区成员",
          "id": "community/people"
        }
      ]
    },
    // {
    //   "type": "category",
    //   "label": "博客",
    //   "items": [
    //     {
    //       "type": "doc",
    //       "label": "蚂蚁云原生应用运行时的探索和实践 - ArchSummit 上海",
    //       "id": "blog/exploration-and-practice-of-antcloud-native-application-runtime-archsummit-shanghai"
    //     },
    //     {
    //       "type": "doc",
    //       "label": "MOSN子项目Layotto：开启服务网格+应用运行时新篇章",
    //       "id": "blog/mosn-subproject-layotto-opening-a-new-chapter-in-service-grid-application-runtime/index"
    //     },
    //     {
    //       "type": "category",
    //       "label": "源码分析",
    //       "items": [
    //         {
    //           "type": "doc",
    //           "label": "启动流程",
    //           "id": "blog/code/start_process/start_process"
    //         },
    //         {
    //           "type": "doc",
    //           "label": "处理 RPC 请求",
    //           "id": "blog/code/layotto-rpc/index"
    //         },
    //         {
    //           "type": "doc",
    //           "label": "WebAssembly 相关",
    //           "id": "blog/code/webassembly/index"
    //         },
    //         {
    //           "type": "doc",
    //           "label": "7层流量治理，接口限流",
    //           "id": "blog/code/flowcontrol/flowcontrol_code_analyze"
    //         },
    //         {
    //           "type": "doc",
    //           "label": "源码解析 4层流量治理，tcp流量dump",
    //           "id": "blog/tcpcopy_code_analyze"
    //         }
    //       ]
    //     }
    //   ]
    // },
    {
      "type": "doc",
      "label": "视频合集",
      "id": "video/README"
    }


  ]
};

export default sidebars;
