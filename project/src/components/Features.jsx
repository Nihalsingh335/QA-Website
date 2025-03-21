import './Features.css';

const features = [
  { id: 1, title: 'Ping Test Tool', link: 'https://www.site24x7.com/tools/' },
  { id: 2, title: 'HTTP Request Tool', link: 'https://www.postman.com/' },
  { id: 3, title: 'JSON Formatter', link: 'https://example.com/json' },
  { id: 4, title: 'Code Snippet Storage', link: 'https://example.com/code' },
  { id: 5, title: 'SELENIUM', link: 'https://www.selenium.dev/downloads/' },
];

const Features = () => {
  return (
    <div className="features-container">
      <h2 className="features-heading">Platform Features</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="feature-card"
            onClick={() => window.open(feature.link, '_blank')}
          >
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
