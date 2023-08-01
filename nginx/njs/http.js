function injectEnvVariables(r, data, flags) {

  const env = {};

  for (const key in process.env) {
    if (key.startsWith('REACT_APP')) {
      env[key] = process.env[key];
    }
  }

  const newData = `
    <script>
      window.__ENV__ = ${JSON.stringify(env)};
    </script>
  `;

  const response = data.replace(/(<head>)/, '$1' + newData);

  r.sendBuffer(response, flags);
}

function removeContentLengthHeader(r) {
  delete r.headersOut['Content-Length'];
}

export default { injectEnvVariables, removeContentLengthHeader };
