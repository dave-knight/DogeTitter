// Hardcode the base64-encoded image data here
const base64EncodedImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAEOANcDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKuaVpNzrN6LW0CmQqWJY4AA7mk2krsaV9EU6Ktahptzpd0YLuPY4GRg5BHqDVWhNNXQNW0YUUUUxBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFdh8NUzrV03YW5H5sK4+u4+Gi7Z9Rlx92NFz9Sf8K58U7UZGtH40a2u6TFq8NzbkhriIloXB5Unnb9O1eZMpRirAgg4IPavVrpDaX5mRWMb8tjsa5XxN4amluTf6bC0sU3zOiLkq3cgehrkwdZRfJJ6PY6cTT5lzI5KirEmnXkRxJaXCn/ajIquRg4PBr0009jhsFFFb/hTw7/bd6XuAy2UPMjD+M/3Af5+gqZyUI80hxi5OyJvCvhZ9Wb7ZdjbYxtjk4Mreg9vU/h9Ot1bw1YNpjsllBHtAG5VCsB7VuW8cNvaoI41jhjGI41GBSXA+3WMkGcSEfqOa8Wri5TndOyPRp0FGOp4xd25tbuWBjkxsVz61DWv4ni8vVi2Mb0U/lx/SsivZpy5oKR581yyaCiiirJCiiigAooooAKKKKACiiigAooooAKKKKACiitvw34YufEE52kxWqHEkxGcH0A7n+VTKSguaWw0nJ2RiqpdgqgkngAdzXq3g3w7PpmlMkvyTXLB5Mj7o7L9etXtF8HaZpLrJBAXnHSWU7m/DsPwFdJHGIwCcDsK8rFYtVFyR2O2jQcXzMbDZwwxhVQE4wWPU1TkADsoOQDir87bIWOcHtWUhLyO2TtHAFecdYphQ+o+hqo2jWT7ybaAl/vExKd314q/tbGcHHriimpNbMTSe5hz+GdKRd39nWxHfEeMVJbwxjbZ2CxxQp95oxwvcge/vWxUMcCW7u67UQjLE8Ae9W6smrNkqEVsjP1O8+y+XFHASq8bj0HtRpd59puCAu0j3z1rO1O9F7cgRZZFOFx/F+Falhb/2fYmaQbnwW+Ud6HFKPmXc868amMauqxj5QpwfUbjXO1q+JJGk1iQMCAiqoz6Yz/WsqvfoK1OJ5VV3mwooorUzCiiigAooooAKKKKACiiigAooooAKKKKAAV7r4U8PNZaTBaQqMxrukY/xOeWP+fSvK/A+iDXfEkMLj9zCDNJnoQOg/EkV9FafbLaWe0HOAcn19a4sUudqPTc3pPlTfU5PXdRHh62DNay3Nw7bIoIurn1z2HT8SBXPab4nHiG52+U9vLEw/ct9cEg9+eD6Vr+Nnkv9Pv4SzRi4gjFswBIV0fcVJHTd6+tc/wCD/DN5p9s2o6sZI2CmKzgYklQTljjtn/PWuN0aKoOd9TojVqe05bHU3EplJ2jAHSm2kILoh5AGTVmDTZpHXzBsQ8nnn6YqvPeW9rfOV4jXPXoBXDZnSnc0sADA4HpWZLgSttGBmsqXxDcarZ3V3pt3b6ZpVs4ibUbiNpDLKeioo5x6tXN6J49kkvBb6yY2V22i5QbcH1Yeh9a6PqdXk5rf5mXt4c3Lc7emsiupV1DKeoIyKXrSqpbO0E45OB0rmNiAWduJvNEKB8bcgdqe0m19pHGMk1IAW+6CfoKinjLpnnK9qLgjh/iDoim2t9TtUwqDypcDt/CT+o/KuCr2/VLX7bo15bcFpYGUZ9cZH6ivECMGvawFVzp8r6Hn4mFpXXUKKKK7jmCiiigAooooAKKKKACiiigAooooAKKKKAPU/gxppJ1C/cfKSsK/h8x/9lr2Ix5gKDqVxxXD/D+x/svwrYRgYeWPzn47tz/LA/Cn/FDWNW0TwpA+lbx582y4lVc7E25x7Anv7Yrka9pJmqfKjdWKO2kYLIrv0HI4/wDr0xolM6yMCWUYGe3/ANevn+LxXqUZJZopP96MDH5YrpPBHjnWX8QW1hcytd21zJtKP1iHcqe2B26VhLAtL3WbRxCb1PXXzsbacNg4PvXO6jo63WlkTqQJlKN2K56V2NzpxgAwxOeh9aoyWq3DCCbOCwzg81x1KUovXc3hUT2PO4tFvIPCN14fkEU8DzLNbzIdrRsOuVPUHnv3NUdE8DRWsxlvwsxPCoQD+GOf8a9YPha1wds04PYkjj9KuWGj21gvyr5j5zvcDI+ldPPiZLlbt5mNqSd0VtB0g2MRmnAE0igbMfcHp9a0/LWVCssSFT/CRnNS0VcIKKsjOUnJ3ZWSwt45TJFGI2IwdnAP4Vz/AIjsY7aSOWPI8zgrjgYrqKx/E+7+z48MoHmcg9Tx2rOvCPs3oaUpPnRyyf6xfrXhd8oW/uAowBKwA9Oa9zGc8dRXkvjbTDpviOcqP3Vx++T8eo/A5pZdJKbj3KxS91M5+iiivXOEKKKKACiiigAooooAKKKKACiiigAooooA+l9NiWOyhC/dWNVX6ACsv4kiXUdGTTbOWSCQ4uFkVioc4IwSO3JH1q94ZlF5omnzk7vMt426/wCyM0vi4BNGM6xb5oj8mP1B9uK4YT5JNGzjc+foNH1H7cIRZuZAed6fL9SemK9P+H/heGwvxcSmIzzALuUHCDPIUdf89qxP+ElvFO260pJIj1a2lyfyNb/h3xFY3N9HFBOsU5fPlXXyHpyAD16dq6ZSe7ISPWJdso/eOFU/dyf1rDtm826UEDFJNcyzRshjVRnJIFUpdQstOZGvbqGHecJvkALH2HevPr1lVklE6KcHFO50yTA7Q/yuR0qWsyK5IU/xZ6E1LHe7Uwy5PY5qlURLiy9UD3cSHG7cf9kZqjLPJLyzceg4FQtIq+59qmVaw1A0vt0Xo35Vma9PbTWO1gfNyPL5/M0qt8m5jgYz9KxtSlSa6zGcgKBmsK9Z8nqa0qd5FQAAVwvxPtc2un3QHCu8ZP1wR/I13XSqGu6GfEOh3dlHjzgnmw57uvIH4jI/GubC1OStGTOitHmptHiFFBBBIPUUV9KeQFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAe2/CfWft3hv7NIR5llJ5fuUPK/1H4V3F2UkgKOAQ3QGvBPhzf3Vp4rghtz+6uQVmXttAJz9Rj/Oa9uSTzBkn5h1ry8XLknbudVKN43MK98J2ty5ZERMnO5flP6cGqlz4Cs5oQqzybu+8BlP4YrqqK5lXqLZmrgmcrD4Fiktlg1C/vLiFTlIRM4jT6DNamneF9I0olrWyjVz1dvmY/ia2UjL5wRxUwjVRjAp89Se7FZIbECF579KeSFHJpHcIMn8qhaQtx2pNqKsFrg7lzgHjsKfHFg5bH0qJULnAqzwo9AKUVfVjegyd40hYysFQgg1zn8q0NUYyyAhh5SDAOeC3fHrWHdXQZTHGcju39K560uaVjooxsrimU3cgiX5U6t7itG0cRXUbk4CnjHrVCxA8pjjBzjPrWpp8O+QyHonA+tZJe9ZFydkeG+LbGPTPFmp2kIxHFcMFHoCcj+dZFdb8T7X7N44unzn7QiTfTKgH9RXJV9RSlzQT8jx5KzYUUUVZIUUUUAFFFFABRRRQAUUUUAFFFFAHoPwrtLeSa+uTk3UYWNc9FVs5P4kV6RPHKu2S2IEycYPRh6GuI+FVoselXNzxvmnC/go/wASa9CMe6IEdf514uN1qM78O7RGWl/Hcgqf3cq8NG3UGrNZl1Yx3PzHKSD+MdazZby8s5zF9oY7OmR1FcambunfY6Wn+a2MZrlm1e9YY88j3VQKY2pXknym5k+bjAOP5VSqWF7FnVkMxBOTUInR22xsr4OCVOQKw7bTJZWL3hfrwm7JP1NblvH5ShdoVB0UcYoUm2JwUS0jbx8vygenenqMKAefWovOb0GPSnCYE8jArdSRi0yhqtvIwMu7CKNo9s+grmngKzCJDubv9a6XUFubtysW1Yx93d6+pqOy0mOA7m/eSnkk9K5pK8nY6ITUY6lays1kyoysajqO5rTVVghIUYVATUvlGNR8oCjsO1Vb9ytqQP4mA/rTUeRXJcnNninxFuJ7nxjdGf8AhSNUwMfLtBH865iux+JqY8QWz/37Vf0ZhXHV72Fd6MX5Hn1labQUUUVuZhRRRQAUUUUAFFFFABRRRQAUUVJbiJrmITsViLjeR1C55/SgD174bWJtPDEUjDDXDtNz6fdH8s/jXbrwo+lZelG2aziNkyNa7FERQ/LsHAxWrXhVpOU2zvgrKxHLHuBIHNULqyiuihfIK916keladQzKAQQMZrnkuptCXQ5i7gNrO8ZO4DkH1Fa2m2bW6yBwN7NgH1GP/wBdST2Sz3UUzEYQcrjr3FXoV6t+FQldmkpWQ5IgnufWpKSitbHO22FFOVSxwBUiw8/Mc+wqlFsVxkab29u9TgBRgUABRgDApa1jGxLdxkhxGaytRZSqLvG4Hlc/rV29ult1APJPQDvWLI5kdnY8scmuevNbG1KL3PO/ijBi402cD70bxk/Rs/8As1cHXc/E+8jkvbGzSRWkgjZpUH8BYjAPvgZxXDV7WCv7CNzhxFvaOwUUUV1GIUUUUAFFFFABRRRQAUUUUAFFFFAHR+FPGV34an2EGexdsyQk9PdT2P6GvZtH1qz1mxW5sZhLEeD/AHkPow7Gvnarulaxe6Ldi50+doZBwcdGHoR0Irlr4aNTVaM1p1XHR7H0bTJgSnHauE8O/FCxvVWHVgLKfp5gyYm/qtd1BcxXMSywyI8bjKujBlP0IryqlKUNJI64TT1QxIiSNwwKnAwMDpSgE9ATUiRArk5BqIw7DlK4xVLHAqYRKO2frTlUKMClrWMbENhRRRVkhUNzcLawGRhnnAHqamrG8RarpGjRibWr0RYX5IAcyN9FHP4nik1Jq0dxq1/eK9xcveTAsoB6BVFcl4o8bW+hh7axZLjUehI5SA+/q3t0Hf0rmvEnxCudSeWDSEexs24znMrj3bsPYfma43Na4fL23z1vu/zCpiVblpj5ppLiZ5ZnZ5HYszMckk9SaZRRXrHEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABV7Tdb1HR5PM068mt2PXY2AfqOhqjRSaT3A77T/AIwazbBVvLa0u1Hfb5bH/vnj9K6C1+M+nuo+16VdRt38qRXH64ryGisnh6b6FqpJdT26L4t+HHXLrfxn0MIP8mp//C2fDWPv33/gOP8A4qvDqKj6rTH7WR7TJ8YdAQ4S11F/fYg/9mrPu/jTbKD9i0eVz6zzAD8lH9a8moqlhqa6B7SR2Wq/FXxHqKskE8VjEe1smGx/vHJrkJppbiVpZpHkkY5Z3Ykn6k0yitYwjH4UQ23uFFFFUIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACilZdrEHqDikoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q=="

function findTwitterLogos() {
  const twitterLogoSVGPath = 'M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z';
  const svgElements = document.querySelectorAll('svg');
  const twitterLogos = [];

  function comparePathData(pathData1, pathData2, epsilon) {
    const points1 = pathData1.split(' ');
    const points2 = pathData2.split(' ');

    if (points1.length !== points2.length) {
      return false;
    }

    for (let i = 0; i < points1.length; i++) {
      if (Math.abs(parseFloat(points1[i]) - parseFloat(points2[i])) > epsilon) {
        return false;
      }
    }

    return true;
  }

  for (const svg of svgElements) {
    const path = svg.querySelector('path');
    if (path) {
      const pathData = path.getAttribute('d');
      if (pathData && comparePathData(pathData, twitterLogoSVGPath, 0.01)) {
        twitterLogos.push(svg);
      }
    }
  }

  return twitterLogos;
}

function replaceTwitterLogo(logoDataUrl, logoElement) {
  const img = document.createElement('img');
  img.src = logoDataUrl;
  img.style.width = logoElement.getBoundingClientRect().width + 'px';
  img.style.height = logoElement.getBoundingClientRect().height + 'px';
  img.style.verticalAlign = 'bottom';
  logoElement.parentNode.replaceChild(img, logoElement);
}

function replaceTwitterLogos(logoDataUrl) {
  const logoElements = findTwitterLogos();
  for (const logoElement of logoElements) {
    replaceTwitterLogo(logoDataUrl, logoElement);
  }
}

async function init() {
  // Replace the Twitter logos with the hardcoded base64-encoded image
  replaceTwitterLogos(base64EncodedImage);
}

function onDOMContentLoaded() {
  init();

  // Set up a MutationObserver to monitor for changes in the DOM
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        init(); // Call init() when DOM changes are detected
      }
    }
  });

  // Observe the entire document body and its descendants for any changes
  observer.observe(document.body, { attributes: false, childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  // If the document is still loading, add an event listener for DOMContentLoaded
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
} else {
  // If the document has already loaded, call the onDOMContentLoaded() function directly
  onDOMContentLoaded();
}
