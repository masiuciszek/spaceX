class Node {
  data: number
  next: Node | null
  constructor(data: number) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  head: Node | null
  tail: Node | null
  #size: number
  constructor() {
    this.head = null
    this.tail = null
    this.#size = 0
  }

  getSize(): number {
    return this.#size
  }
  incrementSize(): void {
    this.#size++
  }

  /**
   *
   * @desc insert at the beginning
   */
  prepend(data: number): LinkedList {
    if (!this.head) {
      this.head = new Node(data)
      this.tail = this.head
      this.incrementSize()
      return this
    }
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
    this.incrementSize()
    return this
  }

  /**
   *
   * @desc push to the end of the list
   */
  append(data: number): LinkedList {
    if (!this.tail) {
      this.head = new Node(data)
      this.tail = this.head
      this.incrementSize()
      return this
    }
    const newNode = new Node(data)
    this.tail.next = newNode
    this.tail = newNode
    this.incrementSize()
    return this
  }

  getHead() {
    return this.head
  }

  getNode(index: number) {
    if (index < 0 || index > this.getSize()) return null
    if (index === 0) return this.getHead()
    if (index === this.getSize()) return this.tail
    let tracker = 0
    let current = this.head
    while (current !== null) {
      if (tracker === index) return current
      current = current.next
      tracker++
    }
    return null
  }

  printNodes(): void {
    const nodes: string[] = []
    let current = this.head
    let tracker = 0
    while (current !== null) {
      tracker++
      const v = tracker < this.getSize() ? `${current.data} =>` : `${current.data}`
      nodes.push(v)
      current = current.next
    }
    console.log(nodes)
  }
  sumNodes(): number {
    let sum = 0
    let current = this.head
    while (current !== null) {
      sum += current.data
      current = current.next
    }
    return sum
  }
}

const ll = new LinkedList()
ll.prepend(4)
ll.prepend(1)
ll.prepend(100)
ll.prepend(20)
ll.append(24)
ll.append(125)
ll.append(2)
console.log(ll.printNodes())
console.log(ll.sumNodes())
console.log(ll.getSize())
console.log(ll.getNode(7))
