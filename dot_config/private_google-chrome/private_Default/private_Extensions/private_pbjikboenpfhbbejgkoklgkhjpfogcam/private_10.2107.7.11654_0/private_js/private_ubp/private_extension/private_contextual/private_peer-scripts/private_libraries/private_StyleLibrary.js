var Style;
(function (Style) {
    var StyleLibrary = (function () {
        function StyleLibrary(_htmlDocument) {
            this._htmlDocument = _htmlDocument;
            this._apiMap = {
                "UBPStyleApply": this.applyStyle.bind(this),
                "UBPStyleReset": this.resetStyle.bind(this)
            };
        }
        StyleLibrary.prototype._generateStyleHandle = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0;
                var v = (c == 'x' ? r : (r & 0x3 | 0x8));
                return v.toString(16);
            });
        };
        StyleLibrary.prototype._getElement = function (elementCssSelector) {
            var element = this._htmlDocument.querySelector(elementCssSelector);
            if (!element) {
                throw new Error("StyleLibrary couldn't find the specified element.");
            }
            return element;
        };
        StyleLibrary.prototype.applyStyle = function (styleSpecfication) {
            if (!styleSpecfication ||
                !styleSpecfication.elementCssSelector ||
                !styleSpecfication.inlineCss) {
                throw new Error("StyleLibrary.applyStyle() requires elementCssSelector and inlineCss.");
            }
            var element = this._getElement(styleSpecfication.elementCssSelector);
            if (element.dataset["ubpStyleFinalized"]) {
                throw new Error("StyleLibrary.applyStyle() cannot apply style on a finalized element.");
            }
            element.dataset["ubpOldStyle"] = element.getAttribute("style") || "";
            var styleHandle = this._generateStyleHandle();
            element.dataset["ubpStyleHandle"] = styleHandle;
            element.setAttribute("style", [element.dataset["ubpOldStyle"], styleSpecfication.inlineCss].join("; "));
            if (styleSpecfication.finalize) {
                element.dataset["ubpStyleFinalized"] = styleHandle;
            }
            return styleHandle;
        };
        StyleLibrary.prototype.resetStyle = function (styleHandle) {
            var element = this._getElement("[data-ubp-style-handle='" + styleHandle + "']");
            var oldStyle = element.dataset["ubpOldStyle"];
            element.setAttribute("style", oldStyle);
            element.removeAttribute("data-ubp-style-finalized");
        };
        StyleLibrary.prototype.canHandle = function (requestType) {
            if (typeof this._apiMap[requestType] === "function") {
                return true;
            }
            else {
                return false;
            }
        };
        StyleLibrary.prototype.handle = function (requestType, payload) {
            if (!this.canHandle(requestType)) {
                throw new Error("StyleLibrary: Cannot handle " + requestType + ".");
            }
            return this._apiMap[requestType](payload);
        };
        return StyleLibrary;
    }());
    Style.StyleLibrary = StyleLibrary;
})(Style || (Style = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3R5bGVMaWJyYXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3VicC9leHRlbnNpb24vY29udGV4dHVhbC9wZWVyLXNjcmlwdHMvbGlicmFyaWVzL1N0eWxlTGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEtBQUssQ0E0S2Q7QUE1S0QsV0FBVSxLQUFLO0lBcUNYO1FBZUksc0JBQW9CLGFBQXNCO1lBQXRCLGtCQUFhLEdBQWIsYUFBYSxDQUFTO1lBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUc7Z0JBQ1gsZUFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDM0MsZUFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUM5QyxDQUFDO1FBQ04sQ0FBQztRQU9ELDJDQUFvQixHQUFwQjtZQUNJLE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQWMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFRRCxrQ0FBVyxHQUFYLFVBQVksa0JBQXlCO1lBQ2pDLElBQUksT0FBTyxHQUE0QixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2FBQ3hFO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztRQU9ELGlDQUFVLEdBQVYsVUFBVyxpQkFBcUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQjtnQkFDbEIsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0I7Z0JBQ3JDLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFO2dCQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7YUFDM0Y7WUFFRCxJQUFJLE9BQU8sR0FBZSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDakYsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Z0JBQ3RDLE1BQU0sSUFBSSxLQUFLLENBQUMsc0VBQXNFLENBQUMsQ0FBQTthQUMxRjtZQUVELE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFckUsSUFBSSxXQUFXLEdBQVUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDckQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLFdBQVcsQ0FBQztZQUVoRCxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFeEcsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLEVBQUU7Z0JBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsR0FBRyxXQUFXLENBQUM7YUFDdEQ7WUFFRCxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDO1FBTUQsaUNBQVUsR0FBVixVQUFXLFdBQWtCO1lBQ3pCLElBQUksT0FBTyxHQUFlLElBQUksQ0FBQyxXQUFXLENBQUMsMEJBQTBCLEdBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hGLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFHeEMsT0FBTyxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFRRCxnQ0FBUyxHQUFULFVBQVUsV0FBa0I7WUFDeEIsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUNqRCxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUNJO2dCQUNELE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1FBQ0wsQ0FBQztRQVNELDZCQUFNLEdBQU4sVUFBTyxXQUFrQixFQUFFLE9BQVc7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZFO1lBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFDTCxtQkFBQztJQUFELENBQUMsQUF0SUQsSUFzSUM7SUF0SVksa0JBQVksZUFzSXhCLENBQUE7QUFDTCxDQUFDLEVBNUtTLEtBQUssS0FBTCxLQUFLLFFBNEtkIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIFN0eWxlIHtcblxuICAgIC8qKlxuICAgICAqIEEgY29tcG9uZW50IHRoYXQgYWxsb3dzIGFwcGx5aW5nIGlubGluZSBDU1Mgc3R5bGVzIHRvIGVsZW1lbnRzIG9uIHRoZSBVc2VyJ3MgcGFnZS5cbiAgICAgKlxuICAgICAqIFRoZSBTdHlsZSBsaWJyYXJ5IGlzIHVzZWQgaW4gdGhlIGZvbGxvd2luZyBtYW5uZXI6XG4gICAgICpcbiAgICAgKiA8Y29kZT5cbiAgICAgKiAvLyBjcmVhdGUgYSBTdHlsZUxpYnJhcnkgZm9yIHRoZSBEb2N1bWVudC5cbiAgICAgKiBTdHlsZUxpYnJhcnkgbGlicmFyeSA9IG5ldyBTdHlsZS5TdHlsZUxpYnJhcnkoe1xuICAgICAqICAgICAgZG9jdW1lbnQ6IERvY3VtZW50XG4gICAgICogfSk7XG4gICAgICpcbiAgICAgKiAvLyBhcHBseSB0aGUgaW5saW5lQ3NzIHRvIHRoZSBlbGVtZW50LlxuICAgICAqIHZhciBzdHlsZVNwZWNpZmljYXRpb24gPSB7XG4gICAgICogICAgICBlbGVtZW50Q3NzU2VsZWN0b3I6IFwiI3NvbWVEaXZJZFwiLFxuICAgICAqICAgICAgaW5saW5lQ3NzOiBcIm1hcmdpbi10b3A6IDEwMHB4OyBtYXJnaW4tYm90dG9tOiAxMDBweFwiLFxuICAgICAqICAgICAgZmluYWxpemU6dHJ1ZVxuICAgICAqIH07XG4gICAgICogbGlicmFyeS5oYW5kbGUoXCJVQlBTdHlsZUFwcGx5XCIsIHN0eWxlU3BlY2lmaWNhdGlvbik7XG4gICAgICogPT4gc3R5bGVIYW5kbGVcbiAgICAgKlxuICAgICAqIC8vIHJlc3RvcmUgdGhlIGlubGluZUNzcyB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGFwcGx5IHN0eWxlIHRoYXRcbiAgICAgKiAvLyByZXN1bHRlZCBpbiB0aGUgc3R5bGVIYW5kbGUgd2FzIHBlcmZvcm1lZC5cbiAgICAgKiBsaWJyYXJ5LmhhbmRsZShcIlVCUFN0eWxlUmVtb3ZlXCIsIHN0eWxlSGFuZGxlKTtcbiAgICAgKiA8L2NvZGU+XG4gICAgICpcbiAgICAgKiBYWFg6IHBlZXIgc2NyaXB0cyBjYW5ub3QgdXNlIHRoZSBtb2R1bGUgbG9hZGVyIGFzIHRoZXkgYXJlIHRvIGJlIGluamVjdGVkXG4gICAgICogb250byB0aGUgcGFnZSBkaXJlY3RseSBhbmQgdGh1cyBuZWVkIHRvIGxpZ2h0LXdlaWdodC5cbiAgICAgKlxuICAgICAqIFhYWC0yOiBUaGlzIGxpYnJhcnkgbmVlZHMgdG8gYmUgaW5qZWN0ZWQgb250byB0aGUgcGFnZSBiZWZvcmUgU3R5bGVEcml2ZXJcbiAgICAgKiBhcyB0aGUgZHJpdmVyIG5lZWRzIHRoZSBsaWJyYXJ5IGJlZm9yZSBib290c3RyYXBwaW5nIGJ1dCB0aGVyZSBpcyBub1xuICAgICAqIG1vZHVsZSBsb2FkZXIgYXZhaWxhYmxlIGluIGNvbnRlbnQgc2NyaXB0IGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBAYXV0aG9yIGplZXR1YlxuICAgICAqXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIFN0eWxlTGlicmFyeSBpbXBsZW1lbnRzIElDb250ZXh0dWFsUGVlckxpYnJhcnkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdG9yZXMgYSBtYXBwaW5nIG9mIHJlcXVlc3RUeXBlIChmb3IgZXhhbXBsZSwgVUJQU3R5bGVBcHBseSkgdG9cbiAgICAgICAgICogdGhlIFN0eWxlTGlicmFyeSBBUEkgKGZvciBleGFtcGxlLCBhcHBseVN0eWxlKS5cbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgX2FwaU1hcDp7XG4gICAgICAgICAgICBbcmVxdWVzdFR5cGU6c3RyaW5nXTpGdW5jdGlvblxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsaXplIHdpdGggdGhlIGdpdmVuIGh0bWxEb2N1bWVudC4gQWxzbywgcG9wdWxhdGVzIHRoZSBTdHlsZUxpYnJhcnkuX2FwaU1hcC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGh0bWxEb2N1bWVudCAtIERvY3VtZW50IG9iamVjdCB0aGF0IGNvbnRhaW5zIGVsZW1lbnRzIG9uIHdoaWNoIHN0eWxlIHdpbGwgYmUgYXBwbGllZC5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0bWxEb2N1bWVudDpEb2N1bWVudCkge1xuICAgICAgICAgICAgdGhpcy5fYXBpTWFwID0ge1xuICAgICAgICAgICAgICAgIFwiVUJQU3R5bGVBcHBseVwiOiB0aGlzLmFwcGx5U3R5bGUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBcIlVCUFN0eWxlUmVzZXRcIjogdGhpcy5yZXNldFN0eWxlLmJpbmQodGhpcylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJhdGVzIGEgVVVJRCB0byBiZSB1c2VkIGFzIGFuIHN0eWxlSGFuZGxlSWQuXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfZ2VuZXJhdGVTdHlsZUhhbmRsZSgpOnN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xuICAgICAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMDtcblxuICAgICAgICAgICAgICAgIC8vIHIgJiAweDMgfCAweDggY29lcmNlcyBhbnkgUiB2YWx1ZSB0byBvbmUgb2Y6XG4gICAgICAgICAgICAgICAgLy8gMGIwMTAwMCAoMHg4KVxuICAgICAgICAgICAgICAgIC8vIDBiMDEwMDEgKDB4OSlcbiAgICAgICAgICAgICAgICAvLyAwYjAxMDEwICgweEEpXG4gICAgICAgICAgICAgICAgLy8gMGIwMTAxMSAoMHhCKVxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZTpcbiAgICAgICAgICAgICAgICAvLyAweDMgICAgICAgPSAwYjAwMDExXG4gICAgICAgICAgICAgICAgLy8gMHg4ICAgICAgID0gMGIwMTAwMFxuICAgICAgICAgICAgICAgIC8vIDB4MyB8IDB4OCA9IDBiMDEwMTFcbiAgICAgICAgICAgICAgICAvLyByICYgMHgzICAgPSAoMGIwMDAwMCB8IDBiMDAwMDEgfCAwYjAwMDEwIHwgMGIwMDAxMSlcblxuICAgICAgICAgICAgICAgIHZhciB2ID0gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZWxlbWVudCBiYXNlZCBvbiB0aGUgQ1NTIHNlbGVjdG9yIHByb3ZpZGVkLlxuICAgICAgICAgKiBAcGFyYW0gZWxlbWVudENzc1NlbGVjdG9yXG4gICAgICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9nZXRFbGVtZW50KGVsZW1lbnRDc3NTZWxlY3RvcjpzdHJpbmcpOkhUTUxFbGVtZW50IHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50OkhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PnRoaXMuX2h0bWxEb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRDc3NTZWxlY3Rvcik7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHlsZUxpYnJhcnkgY291bGRuJ3QgZmluZCB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQXBwbHkgYSBzdHlsZSB0byBhbiBlbGVtZW50IGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgSVN0eWxlU3BlY2ZpY2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge0lTdHlsZVNwZWNpZmljYXRpb259IHN0eWxlU3BlY2ZpY2F0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHN0eWxlSGFuZGxlXG4gICAgICAgICAqL1xuICAgICAgICBhcHBseVN0eWxlKHN0eWxlU3BlY2ZpY2F0aW9uOklTdHlsZVNwZWNpZmljYXRpb24pOnN0cmluZyB7XG4gICAgICAgICAgICBpZiAoIXN0eWxlU3BlY2ZpY2F0aW9uIHx8XG4gICAgICAgICAgICAgICAgIXN0eWxlU3BlY2ZpY2F0aW9uLmVsZW1lbnRDc3NTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICFzdHlsZVNwZWNmaWNhdGlvbi5pbmxpbmVDc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHlsZUxpYnJhcnkuYXBwbHlTdHlsZSgpIHJlcXVpcmVzIGVsZW1lbnRDc3NTZWxlY3RvciBhbmQgaW5saW5lQ3NzLlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGVsZW1lbnQ6SFRNTEVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KHN0eWxlU3BlY2ZpY2F0aW9uLmVsZW1lbnRDc3NTZWxlY3Rvcik7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kYXRhc2V0W1widWJwU3R5bGVGaW5hbGl6ZWRcIl0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHlsZUxpYnJhcnkuYXBwbHlTdHlsZSgpIGNhbm5vdCBhcHBseSBzdHlsZSBvbiBhIGZpbmFsaXplZCBlbGVtZW50LlwiKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXRbXCJ1YnBPbGRTdHlsZVwiXSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHN0eWxlSGFuZGxlOnN0cmluZyA9IHRoaXMuX2dlbmVyYXRlU3R5bGVIYW5kbGUoKTtcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldFtcInVicFN0eWxlSGFuZGxlXCJdID0gc3R5bGVIYW5kbGU7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgW2VsZW1lbnQuZGF0YXNldFtcInVicE9sZFN0eWxlXCJdLCBzdHlsZVNwZWNmaWNhdGlvbi5pbmxpbmVDc3NdLmpvaW4oXCI7IFwiKSk7XG5cbiAgICAgICAgICAgIGlmIChzdHlsZVNwZWNmaWNhdGlvbi5maW5hbGl6ZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldFtcInVicFN0eWxlRmluYWxpemVkXCJdID0gc3R5bGVIYW5kbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBzdHlsZUhhbmRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZS1hcHBseSB0aGUgb2xkIGlubGluZSBDU1MgYmVmb3JlIHRoZSBhcHBseVN0eWxlIHRoYXQgZ2VuZXJhdGVkIHRoZSBzdHlsZUhhbmRsZSB3YXMgY2FsbGVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3R5bGVIYW5kbGVcbiAgICAgICAgICovXG4gICAgICAgIHJlc2V0U3R5bGUoc3R5bGVIYW5kbGU6c3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudDpIVE1MRWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoXCJbZGF0YS11YnAtc3R5bGUtaGFuZGxlPSdcIitzdHlsZUhhbmRsZStcIiddXCIpO1xuICAgICAgICAgICAgdmFyIG9sZFN0eWxlID0gZWxlbWVudC5kYXRhc2V0W1widWJwT2xkU3R5bGVcIl07XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIG9sZFN0eWxlKTtcbiAgICAgICAgICAgIC8vIFNpbmNlIFwiZGVsZXRlIGVsZW1lbnQuZGF0YXNldFtcInVicFN0eWxlRmluYWxpemVkXCJdIGRvZXNuJ3Qgd29yayBpbiBGRixcbiAgICAgICAgICAgIC8vIHNvIHVzaW5nIG1vcmUgZ2VuZXJpYyBBUEkgLSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSB0byByZW1vdmUgdGhlIGRhdGEgYXR0cmlidXRlIC0gdWJwU3R5bGVGaW5hbGl6ZWQuXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtdWJwLXN0eWxlLWZpbmFsaXplZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbXBsZW1lbnQge0BsaW5rIElDb250ZXh0dWFsUGVlckxpYnJhcnl9IHRvIHJlc3BvbmQgdG9cbiAgICAgICAgICogb25seSBVQlBTdHlsZSogcmVxdWVzdHMuXG4gICAgICAgICAqIEBwYXJhbSByZXF1ZXN0XG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgY2FuSGFuZGxlKHJlcXVlc3RUeXBlOnN0cmluZyk6Ym9vbGVhbiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2FwaU1hcFtyZXF1ZXN0VHlwZV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlcyB0aGUgbWVzc2FnZSBmcm9tIHRoZSAxLUJBIGFuZCBpbnZva2VzIHRoZSBhcHByb3ByaWF0ZSBtZXRob2QsXG4gICAgICAgICAqIGFuZCByZXR1cm5zIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIG1ldGhvZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RUeXBlXG4gICAgICAgICAqIEBwYXJhbSBwYXlsb2FkXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgaGFuZGxlKHJlcXVlc3RUeXBlOnN0cmluZywgcGF5bG9hZDphbnkpOmFueSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuSGFuZGxlKHJlcXVlc3RUeXBlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN0eWxlTGlicmFyeTogQ2Fubm90IGhhbmRsZSBcIiArIHJlcXVlc3RUeXBlICsgXCIuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FwaU1hcFtyZXF1ZXN0VHlwZV0ocGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=