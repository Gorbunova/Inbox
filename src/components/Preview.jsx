import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

// function Preview({ content }) {
function Preview({ content }) {
  const path = `../data/${content}`;
  //   console.log(path);
  const docs = [
    // { uri: require(path) },
    { uri: require('../data/content.pdf') },
  ];

  return (
    <DocViewer
      documents={docs}
      //   style={{ width: 500, height: 500 }}
      pluginRenderers={DocViewerRenderers}
    />
  );
}

export default Preview;
