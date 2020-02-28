class Str {
  lower(input) {
    return input.toLowerCase();
  }
  upper(input) {
    return input.toUpperCase();
  }
  capitalize(input) {
    return input
      .split(" ")
      .map(input => input.charAt(0).toUpperCase() + input.slice(1))
      .join(" ");
    //return input.split(" ").map(input=>input.substring(0,1).toUpperCase()+input.substring(1)).join(" ")
  }
  reverse(input) {
    return input
      .split("")
      .reverse()
      .join("");
  }

  contains(str, words) {
    if (Array.isArray(words)) {
        for (let i = 0; i < words.length; i++) {
            if (str.indexOf(words[i]) != -1)
                return true;
        }
        return false;
    }
    else if (typeof words === 'string') {
        if (str.indexOf(words) != -1)
            return true;
        else return false;
    }
}
  random(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    if (length === undefined) {
      length = 16;
    }
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  slug(input, char = '-') {
    return input.replace(/[^a-z0-9\s]+/gi, '')
              .split(/\s+/).join(char).toLowerCase();
    }

  count(str) {
		return str.length;
	}
  countWords(str) {
		return str.split(/\s+\b/).length;
	}
  trim(str, n = 100, repl = '...') {
		if (str.length > n)
			return str.substring(0, n).trim() + repl;
		else return str;
	}
  trimWords(str, n = 30, repl = '...') {
		let words = str.split(/\s+\b/);
		if (words.length > n)
			return words.slice(0, n).join(' ') + repl;
		else return str;
	}
}

let a = Str.prototype.lower("WHAT");

let b = Str.prototype.upper("what");

let c = Str.prototype.capitalize("saya ingin makan");

let d = Str.prototype.reverse("kasur");

let e = Str.prototype.contains("Saya ingin makan sate", "Saya");
let f = Str.prototype.contains("Saya ingin makan sate", "Sate", "ingin");
let g = Str.prototype.contains("Saya ingin makan sate", ["Sate", "ingin"]);

let h = Str.prototype.random();
let i = Str.prototype.random(6);
let j = Str.prototype.random(32);

const title ="JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?";
let k = Str.prototype.slug(title); 
let l = Str.prototype.slug(title, "_");

let m = Str.prototype.count('lorem ipsum');

let n = Str.prototype.countWords('lorem ipsum');

const title2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let o = (Str.prototype.trim('Less than 100 characters'));
let p = (Str.prototype.trim(title2)); 
let q = (Str.prototype.trim(title2, 20));
let r = (Str.prototype.trim(title2, 20, '·····'));

const title3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let s = (Str.prototype.trimWords('Less than 30 words'));
let t = (Str.prototype.trimWords(title3)); 
let u = (Str.prototype.trimWords(title3,3));
let v = (Str.prototype.trimWords(title3, 3, '·····'));

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);
console.log(n);
console.log(o);
console.log(p);
console.log(q);
console.log(r);
console.log(s);
console.log(t);
console.log(u);
console.log(v);