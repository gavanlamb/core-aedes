"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aedes_1 = __importDefault(require("aedes"));
const net_1 = __importDefault(require("net"));
const server = net_1.default.createServer(aedes_1.default().handle);
const port = 1883;
server.listen(port, function () {
    console.log('server started and listening on port ', port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQiw4Q0FBc0I7QUFFdEIsTUFBTSxNQUFNLEdBQUcsYUFBRyxDQUFDLFlBQVksQ0FBQyxlQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUMvQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUE7QUFFakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUM5RCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZWRlcyBmcm9tICdhZWRlcyc7XG5pbXBvcnQgbmV0IGZyb20gJ25ldCc7XG5cbmNvbnN0IHNlcnZlciA9IG5ldC5jcmVhdGVTZXJ2ZXIoYWVkZXMoKS5oYW5kbGUpXG5jb25zdCBwb3J0ID0gMTg4M1xuXG5zZXJ2ZXIubGlzdGVuKHBvcnQsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnc2VydmVyIHN0YXJ0ZWQgYW5kIGxpc3RlbmluZyBvbiBwb3J0ICcsIHBvcnQpXG59KSJdfQ==