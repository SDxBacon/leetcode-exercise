const genes = ["A", "C", "G", "T"];

function minMutation(start: string, end: string, bank: string[]): number {
  if (!bank.includes(end)) return -1;

  // queue
  const queue = [start];
  // visited
  const visited = new Set(start);
  // steps to mutation
  let steps = 0;

  // BFS
  while (queue.length !== 0) {
    const size = queue.length;

    for (let i = 0; i < size; i += 1) {
      // pop from queue
      const current_node = queue.shift()!;

      if (current_node === end) return steps;

      // turn current_node into array
      const gene_array = Array.from(current_node);

      for (const [index, originGeneAtIndex] of gene_array.entries()) {
        // trying to mutate gene at `index` position by A, C, G, T
        for (const gene of genes) {
          // mutate gene
          gene_array[index] = gene;
          const gene_after_mutation = gene_array.join("");

          if (
            !visited.has(gene_after_mutation) &&
            bank.includes(gene_after_mutation)
          ) {
            visited.add(gene_after_mutation);
            queue.push(gene_after_mutation);
          }
        }
        // restore gene at index position to original
        gene_array[index] = originGeneAtIndex;
      }
    }
    steps += 1;
  }

  // unable to reach end, return -1
  return -1;
}
