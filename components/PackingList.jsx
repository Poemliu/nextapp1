function Drink({ name }) {
  let displayContent1 ;
  let displayContent2;
  let displayContent3;
  if(name == 'tea'){
    displayContent1 = 'leaf';
    displayContent2= '15–70 mg/cup';
    displayContent3='4,000+ years'
  }
  else{
    displayContent1 = 'bean';
    displayContent2= '80–185 mg/cup';
    displayContent3='1,000+ years'
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{displayContent1}</dd>
        <dt>Caffeine content</dt>
        <dd>{displayContent2}</dd>
        <dt>Age</dt>
        <dd>{displayContent3}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
