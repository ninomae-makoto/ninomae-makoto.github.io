;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'as break case class continue default deinit do dynamicType else enum ' +
    'extension fallthrough for func if import in init is let new protocol ' +
    'return self Self static struct subscript super switch Type typealias ' +
    'var where while __COLUMN__ __FILE__ __FUNCTION__ __LINE__ associativity ' +
    'didSet get infix inout left mutating none nonmutating operator override ' +
    'postfix precedence prefix right set unowned unowned(safe) unowned(unsafe) weak willSet' +
    'assignment class_protocol exported final lazy noreturn NSCopying NSManaged objc optional required auto_closure noreturn IBAction IBDesignable IBInspectable IBOutlet infix prefix postfix';

		this.regexList = [
			{ regex: /'.*$/gm,										css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },			// strings
			{ regex: /^\s*#.*$/gm,									css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }			// vb keyword
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['swift'];

	SyntaxHighlighter.brushes.Swift = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
