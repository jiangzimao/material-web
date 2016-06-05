class OptionNode {
    constructor(id, parentId, type){
        this.id = id;
        this.parentId = parentId;
        this.type = type;
        this.children = [];
    }
}

// 容器集合
const containerMap = new Map();

// 选项集合
const optionItemMap = new Map();

function appendContainer(id, parentId){
    if (!containerMap.has(id)) {
        if(!containerMap.has(parentId)){
            containerMap.set(parentId, new OptionNode(id, parentId, 'container'));
        }
        let container = new OptionNode(id, parentId, 'container');
        containerMap.set(id, container);
        let parentContainer = containerMap.get(parentId);
        parentContainer.children.push(container);
    }
}

function appendOption(id, parentId){
    let optionItem = new OptionNode(id, parentId, 'option');
    if(containerMap.has(parentId)){
        containerMap.get(parentId).children.push(optionItem);
        optionItemMap.set(id, optionItem);
    }
}

function nextStep(id, option) {
    if(optionItemMap.has(id)){
        let currentOptionItems = containerMap.get(optionItemMap.get(id).parentId).children;
        let currentIndex = currentOptionItems.findIndex((optionNode) => optionNode.id === id);
        if(option > 0){
            return currentOptionItems[(currentIndex + 1) % currentOptionItems.length];
        } else {
            return currentOptionItems[--currentIndex < 0 ? currentOptionItems.length - 1 : currentIndex];
        }
    }
}

function back(id) {
    if(optionItemMap.has(id)){
        let parentId = containerMap.get(optionItemMap.get(id).parentId).parentId;
        return containerMap.get(parentId).children.find((optionNode) => optionNode.type === 'option');
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

//appendContainer(200, 2);
//appendOption(2000, 200);*/

console.log(nextStep(22, 1));
console.log(nextStep(22, -1));
console.log(back(22));


// console.log(containerMap.get(1));
// console.log("===========================================");
// console.log(containerMap.get(2));
// console.log("===========================================");
// console.log(containerMap.get(3));


/*
for (let node of containerMap) {
    console.log(node.value);
    console.log("===========================================");
}*/
