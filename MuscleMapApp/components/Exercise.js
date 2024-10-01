// class to replace hard coded strings for exercise
// users should be able to add their own exercises

export default class Exercise {
    constructor(name) {
        this.name = name;
        this.reps = 0;
        this.weight = 0;
        this.duration = 0;
    }

    set_reps(reps) {
        this.reps = reps;
    }
    set_weight(weight) {
        this.weight = weight;
    }
    set_duration(duration) {
        this.duration = duration;
    }
}