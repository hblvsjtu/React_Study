import shallow from 'react-test-renderer/shallow';
import App from './app.jsx';

const ShallowRenderer = new shallow();
ShallowRenderer.render(<App />);
const result = ShallowRenderer.getRenderOutput();

expect(result.type).toBe("div");
expect(result.props.children).toEqual([<h1 className="fontcolor">Hello React!</h1>]);