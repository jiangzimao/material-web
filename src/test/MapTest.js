class OptionNode {
    constructor(id, pId){
        this.id = id;
        this.pId = pId;
        this.children = [];
    }
}

// 容器集合
let containerMap = new Map();

// 选项集合
let optionItemMap = new Map();

 function appendContainer(id, parentId){
    if (!containerMap.has(id)) {
        if(!containerMap.has(parentId)){
            containerMap.set(parentId, new OptionNode(id, parentId));
        }
        let container = new OptionNode(id, parentId);
        containerMap.set(id, container);
        let parentContainer = containerMap.get(parentId);
        parentContainer.children.push(container);
    }
}

 function appendOption(id, parentId){
    let optionItem = new OptionNode(id, parentId);
    if(containerMap.has(parentId)){
        containerMap.get(parentId).children.push(optionItem);
        optionItemMap.set(id, optionItem);
    }
}

appendContainer(1, 0);
appendContainer(2, 1);
appendContainer(3, 1);

appendOption(10, 1);
appendOption(20, 2);
appendOption(21, 2);
appendOption(22, 2);
appendOption(23, 2);
appendOption(30, 3);
appendOption(31, 3);

appendContainer(200, 2);
appendOption(2000, 200);





for (let [key, value] of containerMap.entries()) {
    console.log(value);
}