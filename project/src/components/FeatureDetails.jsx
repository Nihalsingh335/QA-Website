import { useParams, useNavigate } from 'react-router-dom';
import './FeatureDetails.css';

const featureData = {
  'user-management': {
    title: 'User Management',
    description: 'Manage user accounts, roles, and permissions effectively.',
    link: '/user-management'
  },
  'search-filtering': {
    title: 'Search and Filtering',
    description: 'Search and filter data with various criteria.',
    link: '/search-filtering'
  },
  // 'notifications-alerts': {
  //   title: 'Notifications and Alerts',
  //   description: 'Get real-time notifications and alerts.',
  //   link: '/notifications-alerts'
  // },
  'performance-monitoring': {
    title: 'Performance Monitoring',
    description: 'Monitor app performance and resource usage.',
    link: '/performance-monitoring'
  },
  'logging-reporting': {
    title: 'Logging and Reporting',
    description: 'View logs and generate detailed reports.',
    link: '/logging-reporting'
  },
  'integration-api': {
    title: 'Integration and API Support',
    description: 'Integrate with third-party services and APIs.',
    link: '/integration-api'
  },
  'automation-scheduling': {
    title: 'Automation and Scheduling',
    description: 'Automate tasks and set up schedules.',
    link: '/automation-scheduling'
  },
  // 'security-features': {
  //   title: 'Security Features',
  //   description: 'Ensure secure authentication and data handling.',
  //   link: '/security-features'
  // },
  // 'collaboration-tools': {
  //   title: 'Collaboration Tools',
  //   description: 'Collaborate with team members in real time.',
  //   link: '/collaboration-tools'
  // },
  'developer-tools': {
    title: 'Developer Tools',
    description: 'Access a set of tools for development and debugging.',
    link: '/developer-tools'
  },
  // 'test-case-management': {
  //   title: 'Test Case Management',
  //   description: 'Manage and execute test cases efficiently.',
  //   link: '/test-case-management'
  // }
};

const FeatureDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const feature = featureData[id];

  if (!feature) {
    return <p>Feature not found!</p>;
  }

  const handleLearnMore = () => {
    navigate(feature.link); 
  };

  return (
    <div className="feature-details">
      <h2>{feature.title}</h2>
      <p>{feature.description}</p>
      <button onClick={handleLearnMore} className="learn">
        Learn More →
      </button>
    </div>
  );
};

export default FeatureDetails;
