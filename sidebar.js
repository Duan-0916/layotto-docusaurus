export default {
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
                // other items...
            ]
        },
        // {
        //     type: 'doc',
        //     label: '线上实验室',
        //     id: 'start/lab',
        // },
        // {
        //     type: 'category',
        //     label: '用户手册',
        //     link: {
        //         type: 'doc',
        //         id: 'building_blocks/README',
        //     },
        //     items: [
        //         {
        //             type: 'doc',
        //             label: '功能介绍',
        //             id: 'building_blocks/file/file',
        //         },
        //         {
        //             type: 'doc',
        //             label: 'gRPC API 接口文档',
        //             id: 'api_reference/README',
        //         },
        //         {
        //             type: 'link',
        //             label: 'java sdk',
        //             href: 'https://github.com/layotto/java-sdk',
        //         },
        //         {
        //             type: 'link',
        //             label: '.net sdk',
        //             href: 'https://github.com/layotto/dotnet-sdk',
        //         },
        //         // other items...
        //     ]
        // },
        //其他条目...
    ]
};
