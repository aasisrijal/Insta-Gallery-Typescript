import TestRenderer from 'react-test-renderer';
import UploadForm from '../components/UploadForm';

it('renders correctly or not for upload', () => {
    const tree = TestRenderer.create(<UploadForm />).toJSON();
    expect(tree).toMatchSnapshot();
});
