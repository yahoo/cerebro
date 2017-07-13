module.exports = function(grunt) {
    grunt.registerTask(
        'append_benchmarks',
        'Adds benchmark results to timeseries for ci',
        function() {
            var options = this.options(),
                results = grunt.file.readJSON(options.src),
                timeSeries = grunt.file.readJSON(options.dest),
                output = {},
                highestOps;

            // Ensure this task is idempotent
            if (timeSeries.length && results.length &&
                timeSeries[timeSeries.length - 1].time === results[0].timestamp
            ) {
                grunt.warn('Results already added to timeseries');

                return;
            }

            results.sort(function(a, b) {
                // reverse sort to have highest hertz first
                return b.hz - a.hz;
            });

            highestOps = results[0].hz;
            output.time = results[0].timestamp;
            results.forEach(function(r) {
                var name = r.name;

                // Altering format provided by grunt-benchmark to make it before for timeseries
                delete r.name;
                delete r.timestamp;
                r.relativeSpeed = highestOps / r.hz;

                output[name] = r;
            });

            timeSeries.push(output);
            grunt.file.write(options.dest, JSON.stringify(timeSeries));
        }
    );
};
