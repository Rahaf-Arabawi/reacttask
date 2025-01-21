const cardData = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is the first card.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Card Title 2',
    description: 'This is the sacond card.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Card Title 3',
    description: 'This is the third card.',
    image: 'https://via.placeholder.com/150',
  },
];

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
        <h1>Task13</h1>
      {cardData.map((card) => (
        <div
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            width: '200px',
            textAlign: 'center',
          }}
        >
          <img
            src={card.image}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
