const AbcView = {};

// Function render is required function to help GStart request view.
AbcView.render = (Req, pipeData, ctx, extra) => `
	<!-- Sample of Using View Template, code as JS string template for HTML structure -->
	<Req>Req Object Keys: ${Object.keys(Req).toString()}</Req>
	<PipeData>pipeData Object Keys: ${Object.keys(pipeData).toString()}</PipeData>
	<ctx>${JSON.stringify(ctx)}</ctx>
	<extra>${JSON.stringify(extra)}</extra>
`

module.exports = AbcView;