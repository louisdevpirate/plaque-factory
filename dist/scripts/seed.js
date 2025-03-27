"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("../src/lib/prisma");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var authors, _i, authors_1, author, articles, _a, articles_1, article;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    authors = [
                        {
                            id: "auteur1",
                            name: "Manon Dusselier",
                            avatar: "/images/authors/manon-dusselier.jpg",
                            bio: "Journaliste spécialisée dans l’automobile depuis 2010.",
                        },
                        {
                            id: "auteur2",
                            name: "Thomas Pillot",
                            avatar: "/images/authors/thomas-pillot.jpg",
                            bio: "Ancien technicien de contrôle technique passionné de véhicules anciens.",
                        },
                        {
                            id: "auteur3",
                            name: "Maxime Toussaint",
                            avatar: "/images/authors/maxime-toussaint.jpg",
                            bio: "Expert en législation automobile et mobilité durable.",
                        },
                    ];
                    _i = 0, authors_1 = authors;
                    _b.label = 1;
                case 1:
                    if (!(_i < authors_1.length)) return [3 /*break*/, 4];
                    author = authors_1[_i];
                    return [4 /*yield*/, prisma_1.prisma.author.upsert({
                            where: { id: author.id },
                            update: {},
                            create: author,
                        })];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    articles = [
                        {
                            slug: "choisir-plaque-immatriculation",
                            title: "Comment bien choisir sa plaque d'immatriculation ?",
                            description: "Tous les critères pour choisir une plaque adaptée à votre véhicule.",
                            content: "Voici le contenu complet de l'article sur le choix des plaques...",
                            image: "/images/blog/car1.jpg",
                            authorId: "auteur1",
                        },
                        {
                            slug: "plaques-plexi-vs-aluminium",
                            title: "Plexiglass ou aluminium : quel matériau choisir ?",
                            description: "Un comparatif simple et efficace entre deux matériaux très utilisés.",
                            content: "Contenu détaillé sur les avantages et inconvénients du plexiglass vs aluminium...",
                            image: "/images/blog/car2.jpg",
                            authorId: "auteur2",
                        },
                        {
                            slug: "histoire-plaques-france",
                            title: "L’histoire des plaques d’immatriculation en France",
                            description: "Plongez dans l’évolution visuelle et légale des plaques françaises.",
                            content: "Un voyage dans le temps, depuis les premières plaques jusqu’aux modèles actuels...",
                            image: "/images/blog/car3.jpg",
                            authorId: "auteur3",
                        },
                    ];
                    _a = 0, articles_1 = articles;
                    _b.label = 5;
                case 5:
                    if (!(_a < articles_1.length)) return [3 /*break*/, 8];
                    article = articles_1[_a];
                    return [4 /*yield*/, prisma_1.prisma.article.upsert({
                            where: { slug: article.slug },
                            update: {},
                            create: article,
                        })];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7:
                    _a++;
                    return [3 /*break*/, 5];
                case 8:
                    console.log("✅ Auteurs et articles injectés dans Supabase !");
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(function (e) {
    console.error(e);
    process.exit(1);
});
