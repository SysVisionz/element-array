type FullHTMLElementList = Document | MathMLElement | SVGElement | ChildNode | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLModElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLQuoteElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | HTMLFieldSetElement ;
type CommonOmitKeys = 'getElementsByClassName' | 'getElementsByTagName' | 'getElementsByTagNameNS' | 'ownerDocument' | 'children' | 'childNodes' | 'firstChild' | 'firstElementChild' | 'lastChild' | 'nextSibling' | 'previousSibling' | 'parentElement' | 'parentNode' | 'byId' | 'getElementById' | 'getElementsByName' | 'byTagName' | 'byTagNameNS';
type HTMLDocSharedFuncs<T extends FullHTMLElementList, O extends keyof T | void = void> = Omit<T, O extends void ? CommonOmitKeys : O | CommonOmitKeys> & {
    elem: T;
    byClass: (classNames: string) => ElementArrayer[];
    getElementsByClassName: (classNames: string) => ElementArrayer[];
    byTagName: {
        <K extends keyof HTMLElementTagNameMap>(tagName: K): K extends "a" ? AnchorArrayer[] : K extends "abbr" ? ElementArrayer[] : K extends "address" ? ElementArrayer[] : K extends "area" ? AreaArrayer[] : K extends "article" ? ElementArrayer[] : K extends "aside" ? ElementArrayer[] : K extends "audio" ? AudioArrayer[] : K extends "b" ? ElementArrayer[] : K extends "base" ? BaseArrayer[] : K extends "bdi" ? ElementArrayer[] : K extends "bdo" ? ElementArrayer[] : K extends "blockquote" ? QuoteArrayer[] : K extends "br" ? BRArrayer[] : K extends "button" ? ButtonArrayer[] : K extends "canvas" ? CanvasArrayer[] : K extends "caption" ? TableCaptionArrayer[] : K extends "cite" ? ElementArrayer[] : K extends "code" ? ElementArrayer[] : K extends "col" ? TableArrayer[] : K extends "colgroup" ? TableColArrayer[] : K extends "data" ? DataArrayer[] : K extends "datalist" ? DataListArrayer[] : K extends "dd" ? ElementArrayer[] : K extends "del" ? ModArrayer[] : K extends "details" ? DetailsArrayer[] : K extends "dfn" ? ElementArrayer[] : K extends "dialog" ? DialogArrayer[] : K extends "div" ? DivArrayer[] : K extends "dl" ? DListArrayer[] : K extends "dt" ? ElementArrayer[] : K extends "em" ? ElementArrayer[] : K extends "embed" ? EmbedArrayer[] : K extends "fieldset" ? FieldSetArrayer[] : K extends "figcaption" ? ElementArrayer[] : K extends "figure" ? ElementArrayer[] : K extends "footer" ? ElementArrayer[] : K extends "form" ? FormArrayer[] : K extends "h1" ? HeadingArrayer[] : K extends "h2" ? HeadingArrayer[] : K extends "h3" ? HeadingArrayer[] : K extends "h4" ? HeadingArrayer[] : K extends "h5" ? HeadingArrayer[] : K extends "head" ? HeadArrayer[] : K extends "header" ? ElementArrayer[] : K extends "hgroup" ? ElementArrayer[] : K extends "hr" ? HRArrayer[] : K extends "i" ? ElementArrayer[] : K extends "iframe" ? IFrameArrayer[] : K extends "img" ? ImageArrayer[] : K extends "input" ? InputArrayer[] : K extends "ins" ? ModArrayer[] : K extends "kbd" ? ElementArrayer[] : K extends "label" ? LabelArrayer[] : K extends "legend" ? LegendArrayer[] : K extends "li" ? LIArrayer[] : K extends "link" ? LinkArrayer[] : K extends "main" ? ElementArrayer[] : K extends "map" ? MapArrayer[] : K extends "mark" ? ElementArrayer[] : K extends "menu" ? MenuArrayer[] : K extends "meta" ? MetaArrayer[] : K extends "meter" ? MeterArrayer[] : K extends "nav" ? ElementArrayer[] : K extends "noscript" ? ElementArrayer[] : K extends "object" ? ObjectArrayer[] : K extends "ol" ? OListArrayer[] : K extends "optgroup" ? OptGroupArrayer[] : K extends "option" ? OptionArrayer[] : K extends "output" ? OutputArrayer[] : K extends "p" ? ParagraphArrayer[] : K extends "picture" ? PictureArrayer[] : K extends "pre" ? PreArrayer[] : K extends "progress" ? ProgressArrayer[] : K extends "q" ? QuoteArrayer[] : K extends "rp" ? ElementArrayer[] : K extends "rt" ? ElementArrayer[] : K extends "ruby" ? ElementArrayer[] : K extends "s" ? ElementArrayer[] : K extends "samp" ? ElementArrayer[] : K extends "search" ? ElementArrayer[] : K extends "section" ? ElementArrayer[] : K extends "select" ? SelectArrayer[] : K extends "slot" ? ElementArrayer[] : K extends "small" ? ElementArrayer[] : K extends "source" ? SourceArrayer[] : K extends "span" ? ElementArrayer[] : K extends "strong" ? ElementArrayer[] : K extends "sub" ? ElementArrayer[] : K extends "summary" ? ElementArrayer[] : K extends "sup" ? ElementArrayer[] : K extends "table" ? TableArrayer[] : K extends "tbody" ? TableSectionArrayer[] : K extends "td" ? TableCellArrayer[] : K extends "template" ? TemplateArrayer[] : K extends "textarea" ? TextAreaArrayer[] : K extends "tfoot" ? TableSectionArrayer[] : K extends "th" ? TableCellArrayer[] : K extends "thead" ? TableSectionArrayer[] : K extends "time" ? TimeArrayer[] : K extends "title" ? TitleArrayer[] : K extends "tr" ? TableRowArrayer[] : K extends "track" ? TrackArrayer[] : K extends "u" ? ElementArrayer[] : K extends "ul" ? UListArrayer[] : K extends "var" ? ElementArrayer[] : K extends "video" ? VideoArrayer[] : K extends "wbr" ? ElementArrayer[] : never;
        <K extends keyof SVGElementTagNameMap>(tagName: K): ElementArrayer[] | null;
        <K extends keyof MathMLElementTagNameMap>(tagName: K): ElementArrayer[] | null;
    };
    getElementsByTagName: {
        <K extends keyof HTMLElementTagNameMap>(tagName: K): K extends "a" ? AnchorArrayer[] : K extends "abbr" ? ElementArrayer[] : K extends "address" ? ElementArrayer[] : K extends "area" ? AreaArrayer[] : K extends "article" ? ElementArrayer[] : K extends "aside" ? ElementArrayer[] : K extends "audio" ? AudioArrayer[] : K extends "b" ? ElementArrayer[] : K extends "base" ? BaseArrayer[] : K extends "bdi" ? ElementArrayer[] : K extends "bdo" ? ElementArrayer[] : K extends "blockquote" ? QuoteArrayer[] : K extends "br" ? BRArrayer[] : K extends "button" ? ButtonArrayer[] : K extends "canvas" ? CanvasArrayer[] : K extends "caption" ? TableCaptionArrayer[] : K extends "cite" ? ElementArrayer[] : K extends "code" ? ElementArrayer[] : K extends "col" ? TableArrayer[] : K extends "colgroup" ? TableColArrayer[] : K extends "data" ? DataArrayer[] : K extends "datalist" ? DataListArrayer[] : K extends "dd" ? ElementArrayer[] : K extends "del" ? ModArrayer[] : K extends "details" ? DetailsArrayer[] : K extends "dfn" ? ElementArrayer[] : K extends "dialog" ? DialogArrayer[] : K extends "div" ? DivArrayer[] : K extends "dl" ? DListArrayer[] : K extends "dt" ? ElementArrayer[] : K extends "em" ? ElementArrayer[] : K extends "embed" ? EmbedArrayer[] : K extends "fieldset" ? FieldSetArrayer[] : K extends "figcaption" ? ElementArrayer[] : K extends "figure" ? ElementArrayer[] : K extends "footer" ? ElementArrayer[] : K extends "form" ? FormArrayer[] : K extends "h1" ? HeadingArrayer[] : K extends "h2" ? HeadingArrayer[] : K extends "h3" ? HeadingArrayer[] : K extends "h4" ? HeadingArrayer[] : K extends "h5" ? HeadingArrayer[] : K extends "head" ? HeadArrayer[] : K extends "header" ? ElementArrayer[] : K extends "hgroup" ? ElementArrayer[] : K extends "hr" ? HRArrayer[] : K extends "i" ? ElementArrayer[] : K extends "iframe" ? IFrameArrayer[] : K extends "img" ? ImageArrayer[] : K extends "input" ? InputArrayer[] : K extends "ins" ? ModArrayer[] : K extends "kbd" ? ElementArrayer[] : K extends "label" ? LabelArrayer[] : K extends "legend" ? LegendArrayer[] : K extends "li" ? LIArrayer[] : K extends "link" ? LinkArrayer[] : K extends "main" ? ElementArrayer[] : K extends "map" ? MapArrayer[] : K extends "mark" ? ElementArrayer[] : K extends "menu" ? MenuArrayer[] : K extends "meta" ? MetaArrayer[] : K extends "meter" ? MeterArrayer[] : K extends "nav" ? ElementArrayer[] : K extends "noscript" ? ElementArrayer[] : K extends "object" ? ObjectArrayer[] : K extends "ol" ? OListArrayer[] : K extends "optgroup" ? OptGroupArrayer[] : K extends "option" ? OptionArrayer[] : K extends "output" ? OutputArrayer[] : K extends "p" ? ParagraphArrayer[] : K extends "picture" ? PictureArrayer[] : K extends "pre" ? PreArrayer[] : K extends "progress" ? ProgressArrayer[] : K extends "q" ? QuoteArrayer[] : K extends "rp" ? ElementArrayer[] : K extends "rt" ? ElementArrayer[] : K extends "ruby" ? ElementArrayer[] : K extends "s" ? ElementArrayer[] : K extends "samp" ? ElementArrayer[] : K extends "search" ? ElementArrayer[] : K extends "section" ? ElementArrayer[] : K extends "select" ? SelectArrayer[] : K extends "slot" ? ElementArrayer[] : K extends "small" ? ElementArrayer[] : K extends "source" ? SourceArrayer[] : K extends "span" ? ElementArrayer[] : K extends "strong" ? ElementArrayer[] : K extends "sub" ? ElementArrayer[] : K extends "summary" ? ElementArrayer[] : K extends "sup" ? ElementArrayer[] : K extends "table" ? TableArrayer[] : K extends "tbody" ? TableSectionArrayer[] : K extends "td" ? TableCellArrayer[] : K extends "template" ? TemplateArrayer[] : K extends "textarea" ? TextAreaArrayer[] : K extends "tfoot" ? TableSectionArrayer[] : K extends "th" ? TableCellArrayer[] : K extends "thead" ? TableSectionArrayer[] : K extends "time" ? TimeArrayer[] : K extends "title" ? TitleArrayer[] : K extends "tr" ? TableRowArrayer[] : K extends "track" ? TrackArrayer[] : K extends "u" ? ElementArrayer[] : K extends "ul" ? UListArrayer[] : K extends "var" ? ElementArrayer[] : K extends "video" ? VideoArrayer[] : K extends "wbr" ? ElementArrayer[] : never;
        <K extends keyof SVGElementTagNameMap>(tagName: K): ElementArrayer[] | null;
        <K extends keyof MathMLElementTagNameMap>(tagName: K): ElementArrayer[] | null;
    };
    byTagNameNS: T extends Document ? {
        (namespaceURI: 'http://www.w3.org/1999/xhtml', localName: string): ElementArrayer[];
        (namespaceURI: 'http://www.w3.org/1998/Math/MathML' | 'http://www.w3.org/1999/xhtml' | 'http://www.w3.org/2000/svg', localName: string): ElementArrayer[];
        (qualifiedName: string, localName: string): ElementArrayer[]
    } : never;
    getElementsByTagNameNS:  T extends Document ? {
        (namespaceURI: 'http://www.w3.org/1999/xhtml', localName: string): ElementArrayer[];
        (namespaceURI: 'http://www.w3.org/1998/Math/MathML' | 'http://www.w3.org/1999/xhtml' | 'http://www.w3.org/2000/svg', localName: string): ElementArrayer[];
        (qualifiedName: string, localName: string): ElementArrayer[]
    } : never;
    ownerDocument: T extends Document ? null : DocumentArrayer;
    children: ElementArrayer[];
    childNodes: ElementArrayer[];
    firstChild: ElementArrayer | null;
    firstElementChild: ElementArrayer | null;
    lastChild: ElementArrayer | null;
    nextSibling: ElementArrayer | null;
    previousSibling: ElementArrayer | null;
    parentElement: ElementArrayer | null;
    parentNode: ElementArrayer | null;
};

export interface DocumentArrayer extends HTMLDocSharedFuncs<Document,  | 'getElementsByName' | 'getElementById'> {
    getElementsByName(name: string): ElementArrayer[];
    byName: (name: string) => ElementArrayer[];
    getElementById: (id: string) => ElementArrayer | null;
    byId: (id: string) => ElementArrayer | null;
    elem: Document;
    ownerDocument: null;
}


export interface ElementArrayer extends HTMLDocSharedFuncs<HTMLElement> {}
export interface UListArrayer extends HTMLDocSharedFuncs<HTMLUListElement> {}
export interface ElementArrayer extends HTMLDocSharedFuncs<HTMLElement> {}
export interface TableRowArrayer extends HTMLDocSharedFuncs<HTMLTableRowElement> {}
export interface TitleArrayer extends HTMLDocSharedFuncs<HTMLTitleElement> {}
export interface TimeArrayer extends HTMLDocSharedFuncs<HTMLTimeElement> {}
export interface TextAreaArrayer extends HTMLDocSharedFuncs<HTMLTextAreaElement> {}
export interface ProgressArrayer extends HTMLDocSharedFuncs<HTMLProgressElement> {}
export interface PreArrayer extends HTMLDocSharedFuncs<HTMLPreElement> {}
export interface TemplateArrayer extends HTMLDocSharedFuncs<HTMLTemplateElement> {}
export interface TableCellArrayer extends HTMLDocSharedFuncs<HTMLTableCellElement> {}
export interface PictureArrayer extends HTMLDocSharedFuncs<HTMLPictureElement> {}
export interface ParagraphArrayer extends HTMLDocSharedFuncs<HTMLParagraphElement> {}
export interface OptionArrayer extends HTMLDocSharedFuncs<HTMLOptionElement> {}
export interface OutputArrayer extends HTMLDocSharedFuncs<HTMLOutputElement> {}
export interface OptGroupArrayer extends HTMLDocSharedFuncs<HTMLOptGroupElement> {}
export interface OListArrayer extends HTMLDocSharedFuncs<HTMLOListElement> {}
export interface TableSectionArrayer extends HTMLDocSharedFuncs<HTMLTableSectionElement> {}
export interface ObjectArrayer extends HTMLDocSharedFuncs<HTMLObjectElement> {}
export interface MeterArrayer extends HTMLDocSharedFuncs<HTMLMeterElement> {}
export interface MetaArrayer extends HTMLDocSharedFuncs<HTMLMetaElement> {}
export interface SelectArrayer extends HTMLDocSharedFuncs<HTMLSelectElement> {}
export interface MenuArrayer extends HTMLDocSharedFuncs<HTMLMenuElement> {}
export interface MapArrayer extends HTMLDocSharedFuncs<HTMLMapElement> {}
export interface LinkArrayer extends HTMLDocSharedFuncs<HTMLLinkElement> {}
export interface LegendArrayer extends HTMLDocSharedFuncs<HTMLLegendElement> {}
export interface LabelArrayer extends HTMLDocSharedFuncs<HTMLLabelElement> {}
export interface InputArrayer extends HTMLDocSharedFuncs<HTMLInputElement> {}
export interface ImageArrayer extends HTMLDocSharedFuncs<HTMLImageElement> {}
export interface IFrameArrayer extends HTMLDocSharedFuncs<HTMLIFrameElement> {}
export interface HRArrayer extends HTMLDocSharedFuncs<HTMLHRElement> {}
export interface HeadArrayer extends HTMLDocSharedFuncs<HTMLHeadElement> {}
export interface HeadingArrayer extends HTMLDocSharedFuncs<HTMLHeadingElement> {}
export interface FormArrayer extends HTMLDocSharedFuncs<HTMLFormElement> {}
export interface FieldSetArrayer extends HTMLDocSharedFuncs<HTMLFieldSetElement> {}
export interface EmbedArrayer extends HTMLDocSharedFuncs<HTMLEmbedElement> {}
export interface DListArrayer extends HTMLDocSharedFuncs<HTMLDListElement> {}
export interface DetailsArrayer extends HTMLDocSharedFuncs<HTMLDetailsElement> {}
export interface DialogArrayer extends HTMLDocSharedFuncs<HTMLDialogElement> {}
export interface DataListArrayer extends HTMLDocSharedFuncs<HTMLDataListElement> {}
export interface ModArrayer extends HTMLDocSharedFuncs<HTMLModElement> {}
export interface DataArrayer extends HTMLDocSharedFuncs<HTMLDataElement> {}
export interface TableColArrayer extends HTMLDocSharedFuncs<HTMLTableColElement> {}
export interface TableCaptionArrayer extends HTMLDocSharedFuncs<HTMLTableCaptionElement> {}
export interface QuoteArrayer extends HTMLDocSharedFuncs<HTMLQuoteElement> {}
export interface TableArrayer extends HTMLDocSharedFuncs<HTMLTableElement> {}
export interface CanvasArrayer extends HTMLDocSharedFuncs<HTMLCanvasElement> {}
export interface BRArrayer extends HTMLDocSharedFuncs<HTMLElement> {}
export interface TrackArrayer extends HTMLDocSharedFuncs<HTMLTrackElement> {}
export interface BaseArrayer extends HTMLDocSharedFuncs<HTMLBaseElement> {}
export interface AreaArrayer extends HTMLDocSharedFuncs<HTMLAreaElement> {}
export interface VideoArrayer extends HTMLDocSharedFuncs<HTMLVideoElement> {}
export interface DivArrayer extends HTMLDocSharedFuncs<HTMLDivElement> {}
export interface AnchorArrayer extends HTMLDocSharedFuncs<HTMLAnchorElement> {}
export interface AudioArrayer extends HTMLDocSharedFuncs<HTMLAudioElement> {}
export interface ButtonArrayer extends HTMLDocSharedFuncs<HTMLButtonElement> {}
export interface BodyArrayer extends HTMLDocSharedFuncs<HTMLBodyElement> {}
export interface LIArrayer extends HTMLDocSharedFuncs<HTMLLIElement> {}
export interface SourceArrayer extends HTMLDocSharedFuncs<HTMLSourceElement> {}
export interface ChildnodeArrayer extends Omit<HTMLDocSharedFuncs<ChildNode>, 'children' | 'childNodes'> {
    children: ChildnodeArrayer[];
    childNodes: ChildnodeArrayer[];
}
export interface SVGArrayer extends HTMLDocSharedFuncs<SVGElement> {}
export interface MathMLArrayer extends HTMLDocSharedFuncs<MathMLElement> {}
export type ElementArrayerReturn<T> = T extends Document ? DocumentArrayer : T extends MathMLElement ? MathMLArrayer : T extends SVGElement ? SVGArrayer : T extends ChildNode ? ChildnodeArrayer : T extends HTMLAnchorElement ? AnchorArrayer : T extends HTMLAreaElement ? AreaArrayer : T extends HTMLAudioElement ? AudioArrayer : T extends HTMLBaseElement ? BaseArrayer : T extends HTMLQuoteElement ? QuoteArrayer : T extends HTMLBRElement ? BRArrayer : T extends HTMLButtonElement ? ButtonArrayer : T extends HTMLCanvasElement ? CanvasArrayer : T extends HTMLTableCaptionElement ? TableCaptionArrayer : T extends HTMLTableElement ? TableArrayer : T extends HTMLTableColElement ? TableColArrayer : T extends HTMLDataElement ? DataArrayer : T extends HTMLDataListElement ? DataListArrayer : T extends HTMLModElement ? ModArrayer : T extends HTMLDetailsElement ? DetailsArrayer : T extends HTMLDialogElement ? DialogArrayer : T extends HTMLDivElement ? DivArrayer : T extends HTMLDListElement ? DListArrayer : T extends HTMLEmbedElement ? EmbedArrayer : T extends HTMLFormElement ? FormArrayer : T extends HTMLHeadingElement ? HeadingArrayer : T extends HTMLHeadElement ? HeadArrayer : T extends HTMLHRElement ? HRArrayer : T extends HTMLIFrameElement ? IFrameArrayer : T extends HTMLImageElement ? ImageArrayer : T extends HTMLInputElement ? InputArrayer : T extends HTMLModElement ? ModArrayer : T extends HTMLLabelElement ? LabelArrayer : T extends HTMLLegendElement ? LegendArrayer : T extends HTMLLIElement ? LIArrayer : T extends HTMLLinkElement ? LinkArrayer : T extends HTMLMapElement ? MapArrayer : T extends HTMLMenuElement ? MenuArrayer : T extends HTMLMetaElement ? MetaArrayer : T extends HTMLMeterElement ? MeterArrayer : T extends HTMLObjectElement ? ObjectArrayer : T extends HTMLOListElement ? OListArrayer : T extends HTMLOptGroupElement ? OptGroupArrayer : T extends HTMLOptionElement ? OptionArrayer : T extends HTMLOutputElement ? OutputArrayer : T extends HTMLParagraphElement ? ParagraphArrayer : T extends HTMLPictureElement ? PictureArrayer : T extends HTMLPreElement ? PreArrayer : T extends HTMLProgressElement ? ProgressArrayer : T extends HTMLQuoteElement ? QuoteArrayer : T extends HTMLSelectElement ? SelectArrayer : T extends HTMLSourceElement ? SourceArrayer : T extends HTMLTableElement ? TableArrayer : T extends HTMLTableSectionElement ? TableSectionArrayer : T extends HTMLTableCellElement ? TableCellArrayer : T extends HTMLTemplateElement ? TemplateArrayer : T extends HTMLTextAreaElement ? TextAreaArrayer : T extends HTMLTableSectionElement ? TableSectionArrayer : T extends HTMLTableCellElement ? TableCellArrayer : T extends HTMLTimeElement ? TimeArrayer : T extends HTMLTitleElement ? TitleArrayer : T extends HTMLTableRowElement ? TableRowArrayer : T extends HTMLTrackElement ? TrackArrayer : T extends HTMLUListElement ? UListArrayer : T extends HTMLVideoElement ? VideoArrayer : T extends HTMLFieldSetElement ? FieldSetArrayer : never;
const ElementArrayer = <T extends FullHTMLElementList>(element: T):ElementArrayerReturn<T> => {
    return new Proxy<ReturnType<typeof ElementArrayer<T>>>(element as unknown as ReturnType<typeof ElementArrayer<T>>, {
    get: (t, path, r) => {
        const p = path as keyof T
        switch (p){
            case 'byId': 
            case 'getElementById':
                if (!t || t instanceof HTMLElement){
                    throw "Cannot use Id on an HTMLElement. Use on document instead."
                }
                return (elementId: string) => ElementArrayer((t as any).getElementById(elementId))
            case 'byName':
            case 'getElementsByName':
                if (!t || t instanceof HTMLElement){
                    throw "Cannot use Name on an HTMLElement. Use on document instead."
                }
                return (elementName: string) => Array.from((t as any).getElementsByTagName
                    (elementName)).map((el: any) => ElementArrayer(el))
            case 'byClass': 
            case 'getElementsByClassName':
                return (classNames: string) => Array.from((t as any).getElementsByClassName(classNames)).map((el: any) => ElementArrayer(el))
            case 'byTagName':
            case 'getElementsByTagName':
                function getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): ElementArrayer[];
                function getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): ElementArrayer[];
                function getElementsByTagName<K extends keyof MathMLElementTagNameMap>(qualifiedName: K): ElementArrayer[];
                function getElementsByTagName<K extends any> (qualifiedName: K) { return Array.from((t as any).getElementsByTagName(qualifiedName as any)).map(el => ElementArrayer(el as any)) as unknown as ElementArrayer[]}
                return getElementsByTagName
            case 'byTagNameNS':
            case 'getElementsByTagNameNS':
                function getElementsByTagNameNS(namespaceURI: 'http://www.w3.org/1999/xhtml', localName: string): ElementArrayer[];
                function getElementsByTagNameNS(namespaceURI: 'http://www.w3.org/1998/Math/MathML' | 'http://www.w3.org/1999/xhtml' | 'http://www.w3.org/2000/svg', localName: string): ElementArrayer[];
                function getElementsByTagNameNS(qualifiedName: string, localName: string): ElementArrayer[];
                function getElementsByTagNameNS(namespace: string, tagName: string) { return Array.from((t as any).getElementsByTagNameNS(namespace, tagName)).map(el => ElementArrayer(el as any)) }
                return getElementsByTagNameNS
            case 'elem':
                return t
            case 'children':
                return Array.from((t as any).children).map(el => ElementArrayer(el as HTMLElement))
            case 'childNodes':
                return Array.from((t as any).childNodes).map(el => ElementArrayer(el as HTMLElement))
            case 'firstChild':
                return ElementArrayer((t as any).firstChild as HTMLElement)
            case 'firstElementChild':
                return ElementArrayer((t as any).firstElementChild as HTMLElement)
            case 'lastChild':
                return ElementArrayer((t as any).lastChild as HTMLElement)
            case 'nextSibling':
                return ElementArrayer((t as any).nextSibling as HTMLElement)
            case 'previousSibling':
                return ElementArrayer((t as any).previousSibling as HTMLElement)
            case 'parentElement':
                return ElementArrayer((t as any).parentElement as HTMLElement)
            case 'parentNode':
                return ElementArrayer((t as any).parentNode as HTMLElement)
            case 'ownerDocument':
                return ElementArrayer((t as any).ownerDocument as Document)
            default:
                let result = t[p as keyof typeof t]
                if (result instanceof HTMLCollection){
                    return Array.from(result).map(el => el ? ElementArrayer(el as HTMLElement) : el)
                }
                if (result instanceof Document) {
                    return ElementArrayer(result)
                }
                if (result instanceof HTMLElement) {
                    return ElementArrayer(result)
                }
                if (result instanceof SVGElement) {
                    return ElementArrayer(result)
                }
                if (result instanceof MathMLElement) {
                    return ElementArrayer(result)
                }
                if (typeof result === 'function') {
                    return result.bind(t)
                }
                return result
            }
    },
    set: (t, p, v) => { 
        try{
            (t as any)[p] = v
        } catch (e) {
            console.error(e)
            return false
        }
        return true
    }
})
}

export const DocumentArrayer = new Proxy<DocumentArrayer>((typeof window === 'undefined' ? {} : ElementArrayer(document)) as DocumentArrayer, {
    get: (t, p: keyof DocumentArrayer, r) => {
        return typeof t[p] === 'function' ? (t[p] as () => void).bind(t) : t[p]
    },
    set: (t, p: keyof DocumentArrayer, v) => {
        try{
            (t as any)[p] = v
        } catch (e) {
            console.error(e)
            return false
        }
        return true
    }
})

export default ElementArrayer