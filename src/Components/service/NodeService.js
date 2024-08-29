export class NodeService {
    getTreeTableNodes() {
        return Promise.resolve([
            {
                key: "0",
                data: {
                    name: "Documents",
                    size: "75kb",
                    type: "Folder",
                },
                children: [
                    {
                        key: "0-0",
                        data: {
                            name: "Work",
                            size: "55kb",
                            type: "Folder",
                        },
                        children: [
                            {
                                key: "0-0-0",
                                data: {
                                    name: "Expenses.doc",
                                    size: "30kb",
                                    type: "Document",
                                },
                            },
                            {
                                key: "0-0-1",
                                data: {
                                    name: "Resume.doc",
                                    size: "25kb",
                                    type: "Document",
                                },
                            },
                        ],
                    },
                    {
                        key: "0-1",
                        data: {
                            name: "Home",
                            size: "20kb",
                            type: "Folder",
                        },
                        children: [
                            {
                                key: "0-1-0",
                                data: {
                                    name: "Invoices.doc",
                                    size: "20kb",
                                    type: "Document",
                                },
                            },
                        ],
                    },
                ],
            },
            {
                key: "1",
                data: {
                    name: "Pictures",
                    size: "150kb",
                    type: "Folder",
                },
                children: [
                    {
                        key: "1-0",
                        data: {
                            name: "barcelona.jpg",
                            size: "90kb",
                            type: "Picture",
                        },
                    },
                    {
                        key: "1-1",
                        data: {
                            name: "primeui.png",
                            size: "30kb",
                            type: "Picture",
                        },
                    },
                    {
                        key: "1-2",
                        data: {
                            name: "optimus.jpg",
                            size: "30kb",
                            type: "Picture",
                        },
                    },
                ],
            },
            {
                key: "2",
                data: {
                    name: "Movies",
                    size: "200kb",
                    type: "Folder",
                },
                children: [
                    {
                        key: "2-0",
                        data: {
                            name: "Al Pacino",
                            size: "100kb",
                            type: "Folder",
                        },
                        children: [
                            {
                                key: "2-0-0",
                                data: {
                                    name: "Scarface.mp4",
                                    size: "50kb",
                                    type: "Movie",
                                },
                            },
                            {
                                key: "2-0-1",
                                data: {
                                    name: "Serpico.mp4",
                                    size: "50kb",
                                    type: "Movie",
                                },
                            },
                        ],
                    },
                    {
                        key: "2-1",
                        data: {
                            name: "Robert De Niro",
                            size: "100kb",
                            type: "Folder",
                        },
                        children: [
                            {
                                key: "2-1-0",
                                data: {
                                    name: "Goodfellas.mp4",
                                    size: "50kb",
                                    type: "Movie",
                                },
                            },
                            {
                                key: "2-1-1",
                                data: {
                                    name: "Untouchables.mp4",
                                    size: "50kb",
                                    type: "Movie",
                                },
                            },
                        ],
                    },
                ],
            },
        ]);
    }
}
