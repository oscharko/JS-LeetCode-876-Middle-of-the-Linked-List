let head = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const middleNode = function(head) {
  if (head.length % 2 === 0) {
    return head.splice((head.length / 2), head.length)
  } else {
    return head.splice(((head.length - 1) / 2), head.length)
  }
};

// const middleNodeSecondSolution = function(head) {
//   let headNew = []
//   if (head.length % 2 === 0) {
//     for (let i = (head.length / 2); i < head.length; i++) {
//       headNew.push(head[i])
//     }
//   } else {
//     for (let i = ((head.length - 1) / 2); i < head.length; i++) {
//       headNew.push(head[i])
//     }
//   }
//   return headNew
// };

// const middleNode = function(head) {
//   let node = head;
//   let length = 0;
//   while (node != null) {
//     length++;
//     node = node.next;
//   }
//   for (let i = 0; i < parseInt(length / 2); i++) {
//     head = head.next;
//   }
//   return head;
// };

console.log(middleNode(head))