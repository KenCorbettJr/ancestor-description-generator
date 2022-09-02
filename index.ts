
interface Ancestor { 
  type: 'Mother' | 'Father';
  name?: string;
}
const anscestors: Ancestor[] = [
  { type: 'Mother' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Mother' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Mother' },
  { type: 'Father' },
]

const jesusAncestors: Ancestor[] = [
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Father' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Father' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Mother' },
  { type: 'Father' },
  { type: 'Father' },
]

function getOrdinalSuffix(i: number) {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";
}

const getDescription = (ancestors: Ancestor[]) => {
  const type = ancestors[0].type;
  switch (ancestors.length) {
    case 1:
      return type;
    case 2:
      return `Grand ${type}`;
    case 3:
      return `Great Grand ${type}`;
    default:
      return `${getOrdinalSuffix(ancestors.length - 2)} Great Grand ${type}`;
  } 
}

function generateAncestorsDescription(ancestors: Ancestor[]) {
  const groupedByGender = ancestors.reduce((acc: Ancestor[][], curr: Ancestor) => {
    const lastGeneration = acc[acc.length - 1];
    if(lastGeneration && lastGeneration[0]?.type === curr.type) {
      acc[acc.length - 1].push(curr);
    } else {
      acc.push([curr]);
    }
    return acc;
  }, []);
  // console.log(groupedByGender.map(getDescription));
  return groupedByGender.map(getDescription).join("'s ");
}

console.log(`Gavin's ${generateAncestorsDescription(anscestors)} was Jesus\n`);

console.log(`Jesus's ${generateAncestorsDescription(jesusAncestors)} was God\n`);

console.log(`Gavin's ${generateAncestorsDescription([...anscestors, ...jesusAncestors])} was God\n`);