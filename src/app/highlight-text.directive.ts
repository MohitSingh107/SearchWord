import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnChanges {
  @Input() appHighlightText: string = ''; // Substring to highlight

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    this.highlightText();
  }

  private highlightText(): void {
    const element = this.el.nativeElement;
    const originalText = element.textContent; // Get text content from the element
    const searchString = this.appHighlightText.trim(); // Trim the search string

    // Reset the element content
    element.innerHTML = originalText;

    // If the search string is empty or not found in the original text, return
    if (!searchString || !originalText.includes(searchString)) {
      return;
    }

    // Use a simple approach to highlight the text with additional inline styles
    const highlightedText = this.getHighlightedText(originalText, searchString);

    // Replace the element's content with highlighted text
    element.innerHTML = highlightedText;
  }

  private getHighlightedText(text: string, search: string): string {
    // Escape special characters in search string for regex safety
    const escapedSearch = this.escapeRegExp(search);

    // Create a case-insensitive regex pattern for the search string
    const regex = new RegExp(`(${escapedSearch})`, 'gi');

    // Replace the matched substring with a span that has additional inline styles
    return text.replace(regex, `<span style="background-color: yellow; color: black;">$1</span>`);
  }

  // Escape special characters for RegExp safety
  private escapeRegExp(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
