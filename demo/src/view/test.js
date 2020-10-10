const TestView = {};

// Function render is required function to help GStart request view.
TestView.render = (Req, pipeData, ctx, extra) => `
	<!-- Sample of Using View Template -->
	// <Req>${Req}</Req>
	// <PipeData>${JSON.stringify(pipeData)}</PipeData>
	// <ctx>${JSON.stringify(ctx)}</ctx>
	 ${JSON.stringify(ctx)} ${ctx.key1}
	`

module.exports = TestView;