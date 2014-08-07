define(function (require) {
    return {
        boards: {
            board_sample: {
                id: "board_sample",
                name: "Welcome Board",
                lists: {
                    list_sample_1: {
                        id: "list_sample_1",
                        name: "Basics",
                        description: "Basics List",
                        items: {
                            item_sample_1: {
                                id: "item_sample_1",
                                name: "This is a card",
                                description: "People can vote on cards."

                            },
                            item_sample_2: {
                                id: "item_sample_2",
                                name: "Click on a card to see what's behind it",
                                description: "You can put a detailed description here..."

                            }
                        }
                    },
                    list_sample_3: {
                        id: "list_sample_3",
                        name: "Intermediate",
                        description: "Intermediate List",
                        items: {
                            item_sample_4: {
                                id: "item_sample_4",
                                name: "Invite team",
                                description: "Invite your team to this board using the Add Members button"

                            },
                            item_sample_5: {
                                id: "item_sample_5",
                                name: "Dragging",
                                description: "Try dragging cards anywhere"

                            },
                            item_sample_6: {
                                id: "item_sample_6",
                                name: "Finished with a card?",
                                description: "Want to bring it back to the board?"

                            }
                        }
                    },
                    list_sample_7: {
                        id: "list_sample_8",
                        name: "Advanced",
                        description: "Advanced List",
                        items: {
                            item_sample_9: {
                                id: "item_sample_9",
                                name: "Use as many boards as you want",
                                description: "To make a new board, click on the **Boards** menu in the top right hand corner and select 'New Board'."

                            },
                            item_sample_10: {
                                id: "item_sample_10",
                                name: "Need help",
                                description: "You can get to the help page any time"

                            }
                        }
                    }
                }
            }
        }
    };
});


