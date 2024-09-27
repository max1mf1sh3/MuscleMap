// class to replace hard coded strings for exercise
// users should be able to add their own exercises

class Exercise {
    constructor(name, id) {
        this.name = name;
        this.id = id;
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