use std::io::stdin;
use std::process::exit;

fn main() {
    let input = "1000000";
    let result = i32::from_str_radix(input, 2);

    match result {
        Ok(value) => println!("{}", value),
        Err(error) => println!("There was an error: {}", error),
    }

    let mut age = String::new();
    stdin().read_line(&mut age).unwrap();
    age = age.trim().to_string();

    let age = match age.parse::<i32>() {
        Ok(value) => value,
        Err(err) => {
            println!("{}", err);
            exit(1);
        },
    };

    match age {
        ..=0 => println!("unborn"),
        1..=10 => println!("young"),
        11..=19 => println!("teenager"),
        20..=30 => println!("alive"),
        31.. => println!("ancient"),
    }

    let mut list = vec![
        "beardshrimp",
        "maestoso",
        "ThatNerd",
        "Sam",
        "Mero"
    ];

    list.sort();
    let list: Vec<String> = list
        .into_iter()
        .map(|name| name.to_uppercase())
        .rev()
        .collect();

    println!("The server members are {:?}.", list);
}
