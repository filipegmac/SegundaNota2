function Queue() {
    const array = []

    this.enqueue = function(element) {
        array.push(element)
    }

    this.dequeue = function() {
        array.shift()
    }

    this.print = function() {
        console.log(array.toString())
    }
}
let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()

queue.print()